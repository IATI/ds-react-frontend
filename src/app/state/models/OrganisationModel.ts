interface Organisation {
  code: string;
  name: string;
}
export interface OrganisationModel {
  reporting_org_ref: Organisation;
}
interface OrganisationName {
  narratives: OrganisationNarrativesItem[];
}
interface OrganisationNarrativesItem {
  text: string;
  language: OrganisationLanguage;
}
interface OrganisationLanguage {
  code: string;
  name: string;
}
