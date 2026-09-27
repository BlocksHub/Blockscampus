export type FonctionsParametresRawResponse = {
  parametreGeneral: {
    urlLogo: string;

    avecForum: boolean;
    UrlAide: string;

    urlSiteIndexEducation: string;
    urlInfosHebergement: string;

    accessibiliteNonConforme: boolean;
    urlDeclarationAccessibilite: string;
    urlPolitiqueConfidentialite: string;

    urlFAQEnregistrementDoubleAuth: string;
    urlTutoVideoSecurite: string;
    urlTutoEnregistrerAppareils: string;

    precisionNotation: number;

    baremeNotation: number;
    baremeMaxDevoirs: number;

    minBaremeQuestionQCM: number;
    maxBaremeQuestionQCM: number;
    maxNbPointQCM: number;
    maxNiveauQCM: number;

    AvecRecuperationInfosConnexion: boolean;

    estHebergeEnFrance: boolean;

    langue: string;
    langID: number;
    listeLangues: Array<{
      langID: number;
      description: string;
    }>;

    PremierLundi: string;
    DerniereDate: string;

    JoursOuvres: string;
    NombreJoursOuvres: number;

    SemainesFeriees: string;
    JoursFeries: string;

    PlacesParHeure: number;
    PlacesParJour: number;
    DureeSequence: number;
    Version: string;
  };

  parametres: {
    Divers: [{
      NomEtablissement: string;
    }];

    PlanningGeneral: Array<{
      NumeroPremiereSemaine: number;
    }>;
  };

  dateDemo: string | null;
}


interface rawSkillLevel {
  G:                    number;
  P:                    number;
  listePositionnements: Array<{
    G:                        number;
    abbreviation:             string;
    abbreviationAvecPrefixe?: string;
    label:                    string;
  }>;
  positionJauge:            number;
  actifPour:                number[];
  abbreviation:             string;
  raccourci:                string;
  raccourciPositionnement:  string;
  label:                    string;
  id:                       number;
  couleur?:                 string;
  ponderation?:             string;
  nombrePointsBrevet?:      number;
  estAcqui?:                boolean;
  estNonAcqui?:             boolean;
  estNotantPourTxReussite?: boolean;
}
