export type SchoolInfo = {
  shortName: string;
  logoUrl?:  string;
}

export type GradingSettings = {
  scale:    number;
  maxGrade: number;
}

export type EnvironmentSettings = {
  isAccessibilityCompliant: boolean;
  isHostedInFrance:         boolean;
}

export type InstancePermissions = {
  allowConnectionInfoRecovery?:                boolean;
  isForumEnabled?:                             boolean;
  canChat?:                                    boolean;
  isChatDisabledBySchedule?:                   boolean;
  canChatWithStaff?:                           boolean;
  canChatWithTeachers?:                        boolean;
  canEnterParentsObservations?:                boolean;
  canViewPersonalData?:                        boolean;
  canViewAdministrativeDataFromOtherStudents?: boolean;
  canUpdateCredentials?:                       boolean;
  canPrintBrevetReport?:                       boolean;
  maxEstablishmentAttachmentSize?:             number;
  maxStudentHomeworkUploadSize?:               number;
  maxHomeworkTextLength?:                      number;
  maxCircumstanceTextLength?:                  number;
  maxCommentTextLength?:                       number;

  allowCommunicationsAllClasses?:         boolean;
  hasAdvancedDiscussion?:                 boolean;
  hasParentDiscussion?:                   boolean;
  canEnterNews?:                          boolean;
  canEnterAgenda?:                        boolean;
  canViewGuardiansSheets?:                boolean;
  canViewStudentIdentity?:                boolean;
  canViewStudentPhotos?:                  boolean;
  canViewAllStudents?:                    boolean;
  hasMessagingDisconnectRight?:           boolean;
  hasInstantMessaging?:                   boolean;
  canPublishOnSchoolPage?:                boolean;
  canUploadDocumentsForStaff?:            boolean;
  canUploadDocumentsForGuardians?:        boolean;
  intendance?:                            IntendancePermissions;
  canTriggerPPMSAlerts?:                  boolean;
  canViewTeacherAbsencesAndReplacements?: boolean;
}

export type IntendancePermissions = {
  withOrderRequests?:             boolean;
  withITTaskRequests?:            boolean;
  withSecretariatTaskRequests?:   boolean;
  withMaintenanceTaskRequests?:   boolean;
  withOrderExecution?:            boolean;
  withITTaskExecution?:           boolean;
  withSecretariatTaskExecution?:  boolean;
  withMaintenanceTaskExecution?:  boolean;
  withOrderManagement?:           boolean;
  withITTaskManagement?:          boolean;
  withMaintenanceTaskManagement?: boolean;
}

export type ScheduleSettings = {
  seatsPerDay:           number;
  seatsPerHour:          number;
  sequenceDuration:      number;
  openDays:              Array<number>;
  openDaysNumber:        number;
  firstWeek:             number;
  firstMonday:           Date;
  firstDate:             Date;
  lastDate:              Date;
  publicHolidays:        PublicHoliday[];
}

export type PublicHoliday = {
  from:  Date;
  to:    Date;
}

export type EvaluationSettings = {
  qcm:                  QCMSettings;
}

export type QCMSettings = {
  minScore:  number;
  maxScore:  number;
  maxPoints: number;
  maxLevel:  number;
}

export type Language = {
  id:    number;
  label: string;
}

export type Ressources = {
  confidentialityPolicy?:    string;
  indexEducationWebsite?:    string;
  hostingInfo?:              string;
  support?:                  string;
  faqTwoFactorRegistration?: string;
  securityTutorialVideo?:    string;
  registerDevicesTutorial?:  string;
  accessibilityDeclaration?: string;
}