import { randomBytes } from "@noble/hashes/utils.js";
import type {
  EnvironmentSettings,
  EvaluationSettings,
  GradingSettings,
  Language,
  InstancePermissions,
  Ressources,
  ScheduleSettings,
  SchoolInfo,
  PublicHoliday
} from "@/types/instance";
import type { Session } from "@/structures/Session";
import { RSA } from "@/structures/crypto/RSA";
import { Request } from "@/structures/network/Request";
import type { FonctionsParametresRawResponse } from "@/types/responses/instance";

function dateWeek(a: Date) {
  var d = new Date(a);
  d.setHours(0,0,0,0);
  d.setDate(d.getDate() + 3  -(d.getDay() + 6) % 7);
  var w = new Date(d.getFullYear(), 0, 4);
  return Number(('0' + (1 + Math.round(((d.getTime() - w.getTime() ) / 86400000 - 3 + (w.getDay() + 6) % 7) / 7))).slice(-2));
}

function pronoteDayToDate(
  premierLundi: string,
  jour: number
): Date {
  const [day, month, year] = premierLundi.split("/").map(Number) as [
    number,
    number,
    number
  ];

  const date = new Date(Date.UTC(year, month - 1, day));

  date.setUTCDate(date.getUTCDate() + jour - 1);

  return date;
}

export class Settings {
  constructor(
    public version: string,
    public isDemo: boolean,
    public school: SchoolInfo,
    public schoolYear: number[],
    public grading: GradingSettings,
    public availableLanguages: Language[],
    public currentLanguage: Language,
    public environment: EnvironmentSettings,
    public schedule: ScheduleSettings,
    public evaluation: EvaluationSettings,
    public permissions: InstancePermissions,
    public ressources?: Ressources,
  ) {}

  public static async load(session: Session): Promise<Settings> {
    const nextIv = randomBytes(16);
    const uuid = session.useHttps ? Buffer.from(nextIv).toString("base64") : RSA.encrypt1024(nextIv);

    const request = new Request()
      .setPronotePayload(session, "FonctionParametres", {
        Uuid:           uuid,
        identifiantNav: null
      });
    session.aes.updateIv(nextIv);

    const response = (await session.manager.enqueueRequest<FonctionsParametresRawResponse>(request))
      .data;
      console.log(response);

    const g = response.parametreGeneral;
    const languages: Language[] = g.listeLangues.map((l) => (
      { id: l.langID, label: l.description }
    ));
    const currentLang = languages.find((l) => l.id === +g.langID) ?? languages[0];
    const schoolYear = []
    schoolYear.push(g.PremierLundi.split("/")[2] as unknown as number);
    schoolYear.push(g.DerniereDate.split("/")[2] as unknown as number);

    const holidays: PublicHoliday[] = [];

    g.JoursFeries.replace("[", "").replace("]", "").split(",").map((h) => {
      if(h.includes("..")) {
        const [start, end] = h.split("..");
        const civilStartDay = pronoteDayToDate(g.PremierLundi, Number(start));
        const civilEndDay = pronoteDayToDate(g.PremierLundi, Number(end));
        holidays.push({
          from: civilStartDay,
          to: civilEndDay
        })
      }
      else {
        const civilDay = pronoteDayToDate(g.PremierLundi, Number(h));
        holidays.push({
          from: civilDay,
          to: civilDay
        })
      }
    })

    return new Settings(
      g.Version,
      !!response.dateDemo,
      {
        shortName: response.parametres.Divers[0].NomEtablissement,
        logoUrl:   g.urlLogo
      },
      schoolYear,
      {
        scale:    g.baremeNotation,
        maxGrade: g.baremeMaxDevoirs
      },
      languages,
      currentLang!,
      {
        isAccessibilityCompliant: !!g.accessibiliteNonConforme,
        isHostedInFrance:         g.estHebergeEnFrance
      },
      {
        seatsPerDay:           g.PlacesParJour,
        seatsPerHour:          g.PlacesParHeure,
        sequenceDuration:      g.DureeSequence,
        openDays:              g.JoursOuvres.split("").map((d) => +d),
        openDaysNumber:        g.NombreJoursOuvres,
        firstWeek:             dateWeek(new Date(g.PremierLundi)),
        firstMonday:           new Date(g.PremierLundi),
        firstDate:             new Date(g.PremierLundi),
        lastDate:              new Date(g.DerniereDate),
        publicHolidays:        holidays,
      },
      {
        qcm:                  {
          minScore:  g.minBaremeQuestionQCM,
          maxScore:  g.maxBaremeQuestionQCM,
          maxPoints: g.maxNbPointQCM,
          maxLevel:  g.maxNiveauQCM
        }
      },
      {
        allowConnectionInfoRecovery:          g.AvecRecuperationInfosConnexion,
        isForumEnabled:                       g.avecForum,
      },
      {
        confidentialityPolicy:    g.urlPolitiqueConfidentialite,
        indexEducationWebsite:    g.urlSiteIndexEducation,
        hostingInfo:              g.urlInfosHebergement,
        support:                  g.UrlAide,
        faqTwoFactorRegistration: g.urlFAQEnregistrementDoubleAuth,
        securityTutorialVideo:    g.urlTutoVideoSecurite,
        registerDevicesTutorial:  g.urlTutoEnregistrerAppareils,
        accessibilityDeclaration: session.source + g.urlDeclarationAccessibilite
      },
    )
  }
}
