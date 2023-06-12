export interface IJob {
  uuid: string;
  jobTitle: string;
  contractType: string;
  isActive: boolean;
  remoteWork: string;
  salary: number;
  studyLevel: number;
  currency: string;
  city: string;
  company: string;
  applyMail: string;
  about: string;
  startDate: string;
  publishDate: string;
}

export interface IFilters {
  isBack: boolean;
  isFront: boolean;
  isFullstack: boolean;
  isPO: boolean;
  isCDD: boolean;
  isCDI: boolean;
  isInternship: boolean;
  isApprenticeship: boolean;
  isRemotePartial: boolean;
  isRemotePonctual: boolean;
  isRemoteFull: boolean;
  isRemoteUnknown: boolean;
  isRemoteNone: boolean;
}

export type Sort = "date" | "salary";
