type Maybe<T> = T | null;
type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  Coordinates: any;
  ISO8601Date: any;
  ISO8601DateTime: any;
  URL: any;
};

type Address = {
  __typename?: "Address";
  cityCode: Scalars["String"];
  cityName: Scalars["String"];
  departmentCode?: Maybe<Scalars["String"]>;
  departmentName?: Maybe<Scalars["String"]>;
  geometry?: Maybe<GeoJson>;
  label: Scalars["String"];
  postalCode: Scalars["String"];
  regionCode?: Maybe<Scalars["String"]>;
  regionName?: Maybe<Scalars["String"]>;
  streetAddress?: Maybe<Scalars["String"]>;
  streetName?: Maybe<Scalars["String"]>;
  streetNumber?: Maybe<Scalars["String"]>;
  type: AddressType;
};

type AddressChamp = Champ & {
  __typename?: "AddressChamp";
  address?: Maybe<Address>;
  id: Scalars["ID"];
  label: Scalars["String"];
  stringValue?: Maybe<Scalars["String"]>;
};

enum AddressType {
  Housenumber = "housenumber",
  Street = "street",
  Municipality = "municipality",
  Locality = "locality",
}

type Association = {
  __typename?: "Association";
  dateCreation?: Maybe<Scalars["ISO8601Date"]>;
  dateDeclaration?: Maybe<Scalars["ISO8601Date"]>;
  datePublication?: Maybe<Scalars["ISO8601Date"]>;
  objet?: Maybe<Scalars["String"]>;
  rna: Scalars["String"];
  titre: Scalars["String"];
};

type Avis = {
  __typename?: "Avis";
  attachment?: Maybe<File>;
  claimant?: Maybe<Profile>;
  dateQuestion: Scalars["ISO8601DateTime"];
  dateReponse?: Maybe<Scalars["ISO8601DateTime"]>;
  expert?: Maybe<Profile>;
  id: Scalars["ID"];
  /** @deprecated Utilisez le champ `claimant` à la place. */
  instructeur: Profile;
  question: Scalars["String"];
  reponse?: Maybe<Scalars["String"]>;
};

type CarteChamp = Champ & {
  __typename?: "CarteChamp";
  geoAreas: Array<GeoArea>;
  id: Scalars["ID"];
  label: Scalars["String"];
  stringValue?: Maybe<Scalars["String"]>;
};

type Champ = {
  id: Scalars["ID"];
  label: Scalars["String"];
  stringValue?: Maybe<Scalars["String"]>;
};

type ChampDescriptor = {
  __typename?: "ChampDescriptor";
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  label: Scalars["String"];
  options?: Maybe<Array<Scalars["String"]>>;
  required: Scalars["Boolean"];
  type: TypeDeChamp;
};

type CheckboxChamp = Champ & {
  __typename?: "CheckboxChamp";
  id: Scalars["ID"];
  label: Scalars["String"];
  stringValue?: Maybe<Scalars["String"]>;
  value: Scalars["Boolean"];
};

enum Civilite {
  M = "M",
  Mme = "Mme",
}

type CiviliteChamp = Champ & {
  __typename?: "CiviliteChamp";
  id: Scalars["ID"];
  label: Scalars["String"];
  stringValue?: Maybe<Scalars["String"]>;
  value?: Maybe<Civilite>;
};

type Commune = {
  __typename?: "Commune";
  code: Scalars["String"];
  name: Scalars["String"];
};

type CommuneChamp = Champ & {
  __typename?: "CommuneChamp";
  commune?: Maybe<Commune>;
  departement?: Maybe<Departement>;
  id: Scalars["ID"];
  label: Scalars["String"];
  stringValue?: Maybe<Scalars["String"]>;
};

type CreateDirectUploadInput = {
  dossierId: Scalars["ID"];
  filename: Scalars["String"];
  byteSize: Scalars["Int"];
  checksum: Scalars["String"];
  contentType: Scalars["String"];
  clientMutationId?: Maybe<Scalars["String"]>;
};

type CreateDirectUploadPayload = {
  __typename?: "CreateDirectUploadPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  directUpload: DirectUpload;
};

type DateChamp = Champ & {
  __typename?: "DateChamp";
  date?: Maybe<Scalars["ISO8601Date"]>;
  id: Scalars["ID"];
  label: Scalars["String"];
  stringValue?: Maybe<Scalars["String"]>;
  /** @deprecated Utilisez le champ `date` ou le fragment `DatetimeChamp` à la place. */
  value?: Maybe<Scalars["ISO8601DateTime"]>;
};

type DatetimeChamp = Champ & {
  __typename?: "DatetimeChamp";
  datetime?: Maybe<Scalars["ISO8601DateTime"]>;
  id: Scalars["ID"];
  label: Scalars["String"];
  stringValue?: Maybe<Scalars["String"]>;
};

type DecimalNumberChamp = Champ & {
  __typename?: "DecimalNumberChamp";
  id: Scalars["ID"];
  label: Scalars["String"];
  stringValue?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["Float"]>;
};

type DeletedDossier = {
  __typename?: "DeletedDossier";
  dateSupression: Scalars["ISO8601DateTime"];
  id: Scalars["ID"];
  number: Scalars["Int"];
  reason: Scalars["String"];
  state: DossierState;
};

type DeletedDossierConnection = {
  __typename?: "DeletedDossierConnection";
  edges?: Maybe<Array<Maybe<DeletedDossierEdge>>>;
  nodes?: Maybe<Array<Maybe<DeletedDossier>>>;
  pageInfo: PageInfo;
};

type DeletedDossierEdge = {
  __typename?: "DeletedDossierEdge";
  cursor: Scalars["String"];
  node?: Maybe<DeletedDossier>;
};

type Demandeur = {
  id: Scalars["ID"];
};

type Demarche = {
  __typename?: "Demarche";
  activeRevision: Revision;
  /** @deprecated Utilisez le champ `activeRevision.annotationDescriptors` à la place. */
  annotationDescriptors: Array<ChampDescriptor>;
  /** @deprecated Utilisez le champ `activeRevision.champDescriptors` à la place. */
  champDescriptors: Array<ChampDescriptor>;
  dateCreation: Scalars["ISO8601DateTime"];
  dateDepublication?: Maybe<Scalars["ISO8601DateTime"]>;
  dateDerniereModification: Scalars["ISO8601DateTime"];
  dateFermeture?: Maybe<Scalars["ISO8601DateTime"]>;
  datePublication?: Maybe<Scalars["ISO8601DateTime"]>;
  declarative?: Maybe<DossierDeclarativeState>;
  deletedDossiers: DeletedDossierConnection;
  description: Scalars["String"];
  dossiers: DossierConnection;
  draftRevision: Revision;
  groupeInstructeurs: Array<GroupeInstructeur>;
  id: Scalars["ID"];
  number: Scalars["Int"];
  publishedRevision?: Maybe<Revision>;
  revisions: Array<Revision>;
  service?: Maybe<Service>;
  state: DemarcheState;
  title: Scalars["String"];
};

type DemarcheDeletedDossiersArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  order?: Maybe<Order>;
  deletedSince?: Maybe<Scalars["ISO8601DateTime"]>;
};

type DemarcheDossiersArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  order?: Maybe<Order>;
  createdSince?: Maybe<Scalars["ISO8601DateTime"]>;
  updatedSince?: Maybe<Scalars["ISO8601DateTime"]>;
  state?: Maybe<DossierState>;
  archived?: Maybe<Scalars["Boolean"]>;
  revision?: Maybe<Scalars["ID"]>;
  maxRevision?: Maybe<Scalars["ID"]>;
  minRevision?: Maybe<Scalars["ID"]>;
};

type DemarcheDescriptor = {
  __typename?: "DemarcheDescriptor";
  cadreJuridique?: Maybe<Scalars["String"]>;
  dateCreation: Scalars["ISO8601DateTime"];
  dateDepublication?: Maybe<Scalars["ISO8601DateTime"]>;
  dateDerniereModification: Scalars["ISO8601DateTime"];
  dateFermeture?: Maybe<Scalars["ISO8601DateTime"]>;
  datePublication?: Maybe<Scalars["ISO8601DateTime"]>;
  declarative?: Maybe<DossierDeclarativeState>;
  deliberation?: Maybe<Scalars["String"]>;
  description: Scalars["String"];
  id: Scalars["ID"];
  number: Scalars["Int"];
  revision: Revision;
  service?: Maybe<Service>;
  state: DemarcheState;
  title: Scalars["String"];
};

enum DemarcheState {
  Brouillon = "brouillon",
  Publiee = "publiee",
  Close = "close",
  Depubliee = "depubliee",
}

type Departement = {
  __typename?: "Departement";
  code: Scalars["String"];
  name: Scalars["String"];
};

type DirectUpload = {
  __typename?: "DirectUpload";
  blobId: Scalars["ID"];
  headers: Scalars["String"];
  signedBlobId: Scalars["ID"];
  url: Scalars["String"];
};

type Dossier = {
  __typename?: "Dossier";
  annotations: Array<Champ>;
  archived: Scalars["Boolean"];
  attestation?: Maybe<File>;
  avis: Array<Avis>;
  champs: Array<Champ>;
  dateDepot: Scalars["ISO8601DateTime"];
  dateDerniereModification: Scalars["ISO8601DateTime"];
  dateExpiration?: Maybe<Scalars["ISO8601DateTime"]>;
  datePassageEnConstruction: Scalars["ISO8601DateTime"];
  datePassageEnInstruction?: Maybe<Scalars["ISO8601DateTime"]>;
  dateSuppressionParAdministration?: Maybe<Scalars["ISO8601DateTime"]>;
  dateSuppressionParUsager?: Maybe<Scalars["ISO8601DateTime"]>;
  dateTraitement?: Maybe<Scalars["ISO8601DateTime"]>;
  demandeur: Demandeur;
  demarche: DemarcheDescriptor;
  geojson?: Maybe<File>;
  groupeInstructeur: GroupeInstructeur;
  id: Scalars["ID"];
  instructeurs: Array<Profile>;
  messages: Array<Message>;
  motivation?: Maybe<Scalars["String"]>;
  motivationAttachment?: Maybe<File>;
  number: Scalars["Int"];
  pdf?: Maybe<File>;
  /** @deprecated Utilisez le champ `demarche.revision` à la place. */
  revision: Revision;
  state: DossierState;
  traitements: Array<Traitement>;
  usager: Profile;
};

type DossierAnnotationsArgs = {
  id?: Maybe<Scalars["ID"]>;
};

type DossierAvisArgs = {
  id?: Maybe<Scalars["ID"]>;
};

type DossierChampsArgs = {
  id?: Maybe<Scalars["ID"]>;
};

type DossierMessagesArgs = {
  id?: Maybe<Scalars["ID"]>;
};

type DossierAccepterInput = {
  dossierId: Scalars["ID"];
  instructeurId: Scalars["ID"];
  motivation?: Maybe<Scalars["String"]>;
  justificatif?: Maybe<Scalars["ID"]>;
  disableNotification?: Maybe<Scalars["Boolean"]>;
  clientMutationId?: Maybe<Scalars["String"]>;
};

type DossierAccepterPayload = {
  __typename?: "DossierAccepterPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  dossier?: Maybe<Dossier>;
  errors?: Maybe<Array<ValidationError>>;
};

type DossierArchiverInput = {
  dossierId: Scalars["ID"];
  instructeurId: Scalars["ID"];
  clientMutationId?: Maybe<Scalars["String"]>;
};

type DossierArchiverPayload = {
  __typename?: "DossierArchiverPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  dossier?: Maybe<Dossier>;
  errors?: Maybe<Array<ValidationError>>;
};

type DossierChangerGroupeInstructeurInput = {
  dossierId: Scalars["ID"];
  groupeInstructeurId: Scalars["ID"];
  clientMutationId?: Maybe<Scalars["String"]>;
};

type DossierChangerGroupeInstructeurPayload = {
  __typename?: "DossierChangerGroupeInstructeurPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  dossier?: Maybe<Dossier>;
  errors?: Maybe<Array<ValidationError>>;
};

type DossierClasserSansSuiteInput = {
  dossierId: Scalars["ID"];
  instructeurId: Scalars["ID"];
  motivation: Scalars["String"];
  justificatif?: Maybe<Scalars["ID"]>;
  disableNotification?: Maybe<Scalars["Boolean"]>;
  clientMutationId?: Maybe<Scalars["String"]>;
};

type DossierClasserSansSuitePayload = {
  __typename?: "DossierClasserSansSuitePayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  dossier?: Maybe<Dossier>;
  errors?: Maybe<Array<ValidationError>>;
};

type DossierConnection = {
  __typename?: "DossierConnection";
  edges?: Maybe<Array<Maybe<DossierEdge>>>;
  nodes?: Maybe<Array<Maybe<Dossier>>>;
  pageInfo: PageInfo;
};

enum DossierDeclarativeState {
  EnInstruction = "en_instruction",
  Accepte = "accepte",
}

type DossierEdge = {
  __typename?: "DossierEdge";
  cursor: Scalars["String"];
  node?: Maybe<Dossier>;
};

type DossierEnvoyerMessageInput = {
  dossierId: Scalars["ID"];
  instructeurId: Scalars["ID"];
  body: Scalars["String"];
  attachment?: Maybe<Scalars["ID"]>;
  clientMutationId?: Maybe<Scalars["String"]>;
};

type DossierEnvoyerMessagePayload = {
  __typename?: "DossierEnvoyerMessagePayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  errors?: Maybe<Array<ValidationError>>;
  message?: Maybe<Message>;
};

type DossierLinkChamp = Champ & {
  __typename?: "DossierLinkChamp";
  dossier?: Maybe<Dossier>;
  id: Scalars["ID"];
  label: Scalars["String"];
  stringValue?: Maybe<Scalars["String"]>;
};

type DossierModifierAnnotationAjouterLigneInput = {
  dossierId: Scalars["ID"];
  instructeurId: Scalars["ID"];
  annotationId: Scalars["ID"];
  clientMutationId?: Maybe<Scalars["String"]>;
};

type DossierModifierAnnotationAjouterLignePayload = {
  __typename?: "DossierModifierAnnotationAjouterLignePayload";
  annotation?: Maybe<RepetitionChamp>;
  clientMutationId?: Maybe<Scalars["String"]>;
  errors?: Maybe<Array<ValidationError>>;
};

type DossierModifierAnnotationCheckboxInput = {
  dossierId: Scalars["ID"];
  instructeurId: Scalars["ID"];
  annotationId: Scalars["ID"];
  value: Scalars["Boolean"];
  clientMutationId?: Maybe<Scalars["String"]>;
};

type DossierModifierAnnotationCheckboxPayload = {
  __typename?: "DossierModifierAnnotationCheckboxPayload";
  annotation?: Maybe<Champ>;
  clientMutationId?: Maybe<Scalars["String"]>;
  errors?: Maybe<Array<ValidationError>>;
};

type DossierModifierAnnotationDateInput = {
  dossierId: Scalars["ID"];
  instructeurId: Scalars["ID"];
  annotationId: Scalars["ID"];
  value: Scalars["ISO8601Date"];
  clientMutationId?: Maybe<Scalars["String"]>;
};

type DossierModifierAnnotationDatePayload = {
  __typename?: "DossierModifierAnnotationDatePayload";
  annotation?: Maybe<Champ>;
  clientMutationId?: Maybe<Scalars["String"]>;
  errors?: Maybe<Array<ValidationError>>;
};

type DossierModifierAnnotationDatetimeInput = {
  dossierId: Scalars["ID"];
  instructeurId: Scalars["ID"];
  annotationId: Scalars["ID"];
  value: Scalars["ISO8601DateTime"];
  clientMutationId?: Maybe<Scalars["String"]>;
};

type DossierModifierAnnotationDatetimePayload = {
  __typename?: "DossierModifierAnnotationDatetimePayload";
  annotation?: Maybe<Champ>;
  clientMutationId?: Maybe<Scalars["String"]>;
  errors?: Maybe<Array<ValidationError>>;
};

type DossierModifierAnnotationIntegerNumberInput = {
  dossierId: Scalars["ID"];
  instructeurId: Scalars["ID"];
  annotationId: Scalars["ID"];
  value: Scalars["Int"];
  clientMutationId?: Maybe<Scalars["String"]>;
};

type DossierModifierAnnotationIntegerNumberPayload = {
  __typename?: "DossierModifierAnnotationIntegerNumberPayload";
  annotation?: Maybe<Champ>;
  clientMutationId?: Maybe<Scalars["String"]>;
  errors?: Maybe<Array<ValidationError>>;
};

type DossierModifierAnnotationTextInput = {
  dossierId: Scalars["ID"];
  instructeurId: Scalars["ID"];
  annotationId: Scalars["ID"];
  value: Scalars["String"];
  clientMutationId?: Maybe<Scalars["String"]>;
};

type DossierModifierAnnotationTextPayload = {
  __typename?: "DossierModifierAnnotationTextPayload";
  annotation?: Maybe<Champ>;
  clientMutationId?: Maybe<Scalars["String"]>;
  errors?: Maybe<Array<ValidationError>>;
};

type DossierPasserEnInstructionInput = {
  dossierId: Scalars["ID"];
  instructeurId: Scalars["ID"];
  disableNotification?: Maybe<Scalars["Boolean"]>;
  clientMutationId?: Maybe<Scalars["String"]>;
};

type DossierPasserEnInstructionPayload = {
  __typename?: "DossierPasserEnInstructionPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  dossier?: Maybe<Dossier>;
  errors?: Maybe<Array<ValidationError>>;
};

type DossierRefuserInput = {
  dossierId: Scalars["ID"];
  instructeurId: Scalars["ID"];
  motivation: Scalars["String"];
  justificatif?: Maybe<Scalars["ID"]>;
  disableNotification?: Maybe<Scalars["Boolean"]>;
  clientMutationId?: Maybe<Scalars["String"]>;
};

type DossierRefuserPayload = {
  __typename?: "DossierRefuserPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  dossier?: Maybe<Dossier>;
  errors?: Maybe<Array<ValidationError>>;
};

type DossierRepasserEnConstructionInput = {
  dossierId: Scalars["ID"];
  instructeurId: Scalars["ID"];
  disableNotification?: Maybe<Scalars["Boolean"]>;
  clientMutationId?: Maybe<Scalars["String"]>;
};

type DossierRepasserEnConstructionPayload = {
  __typename?: "DossierRepasserEnConstructionPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  dossier?: Maybe<Dossier>;
  errors?: Maybe<Array<ValidationError>>;
};

type DossierRepasserEnInstructionInput = {
  dossierId: Scalars["ID"];
  instructeurId: Scalars["ID"];
  disableNotification?: Maybe<Scalars["Boolean"]>;
  clientMutationId?: Maybe<Scalars["String"]>;
};

type DossierRepasserEnInstructionPayload = {
  __typename?: "DossierRepasserEnInstructionPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  dossier?: Maybe<Dossier>;
  errors?: Maybe<Array<ValidationError>>;
};

enum DossierState {
  EnConstruction = "en_construction",
  EnInstruction = "en_instruction",
  Accepte = "accepte",
  Refuse = "refuse",
  SansSuite = "sans_suite",
}

type Effectif = {
  __typename?: "Effectif";
  nb: Scalars["Float"];
  periode: Scalars["String"];
};

type Entreprise = {
  __typename?: "Entreprise";
  attestationFiscaleAttachment?: Maybe<File>;
  attestationSocialeAttachment?: Maybe<File>;
  capitalSocial?: Maybe<Scalars["BigInt"]>;
  codeEffectifEntreprise?: Maybe<Scalars["String"]>;
  dateCreation: Scalars["ISO8601Date"];
  effectifAnnuel?: Maybe<Effectif>;
  effectifMensuel?: Maybe<Effectif>;
  etatAdministratif?: Maybe<EntrepriseEtatAdministratif>;
  formeJuridique?: Maybe<Scalars["String"]>;
  formeJuridiqueCode?: Maybe<Scalars["String"]>;
  inlineAdresse: Scalars["String"];
  nom?: Maybe<Scalars["String"]>;
  nomCommercial: Scalars["String"];
  numeroTvaIntracommunautaire?: Maybe<Scalars["String"]>;
  prenom?: Maybe<Scalars["String"]>;
  raisonSociale: Scalars["String"];
  siren: Scalars["String"];
  siretSiegeSocial: Scalars["String"];
};

enum EntrepriseEtatAdministratif {
  Actif = "Actif",
  Ferme = "Ferme",
}

type File = {
  __typename?: "File";
  /** @deprecated Utilisez le champ `byteSizeBigInt` à la place. */
  byteSize: Scalars["Int"];
  byteSizeBigInt: Scalars["BigInt"];
  checksum: Scalars["String"];
  contentType: Scalars["String"];
  filename: Scalars["String"];
  url: Scalars["URL"];
};

type GeoArea = {
  description?: Maybe<Scalars["String"]>;
  geometry: GeoJson;
  id: Scalars["ID"];
  source: GeoAreaSource;
};

enum GeoAreaSource {
  Cadastre = "cadastre",
  SelectionUtilisateur = "selection_utilisateur",
}

type GeoJson = {
  __typename?: "GeoJSON";
  coordinates: Scalars["Coordinates"];
  type: Scalars["String"];
};

type GroupeInstructeur = {
  __typename?: "GroupeInstructeur";
  id: Scalars["ID"];
  instructeurs: Array<Profile>;
  label: Scalars["String"];
  number: Scalars["Int"];
};

type GroupeInstructeurWithDossiers = {
  __typename?: "GroupeInstructeurWithDossiers";
  dossiers: DossierConnection;
  id: Scalars["ID"];
  instructeurs: Array<Profile>;
  label: Scalars["String"];
  number: Scalars["Int"];
};

type GroupeInstructeurWithDossiersDossiersArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  order?: Maybe<Order>;
  createdSince?: Maybe<Scalars["ISO8601DateTime"]>;
  updatedSince?: Maybe<Scalars["ISO8601DateTime"]>;
  state?: Maybe<DossierState>;
};

type IntegerNumberChamp = Champ & {
  __typename?: "IntegerNumberChamp";
  id: Scalars["ID"];
  label: Scalars["String"];
  stringValue?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["BigInt"]>;
};

type LinkedDropDownListChamp = Champ & {
  __typename?: "LinkedDropDownListChamp";
  id: Scalars["ID"];
  label: Scalars["String"];
  primaryValue?: Maybe<Scalars["String"]>;
  secondaryValue?: Maybe<Scalars["String"]>;
  stringValue?: Maybe<Scalars["String"]>;
};

type Message = {
  __typename?: "Message";
  attachment?: Maybe<File>;
  body: Scalars["String"];
  createdAt: Scalars["ISO8601DateTime"];
  email: Scalars["String"];
  id: Scalars["ID"];
};

type MultipleDropDownListChamp = Champ & {
  __typename?: "MultipleDropDownListChamp";
  id: Scalars["ID"];
  label: Scalars["String"];
  stringValue?: Maybe<Scalars["String"]>;
  values: Array<Scalars["String"]>;
};

type Mutation = {
  __typename?: "Mutation";
  createDirectUpload?: Maybe<CreateDirectUploadPayload>;
  dossierAccepter?: Maybe<DossierAccepterPayload>;
  dossierArchiver?: Maybe<DossierArchiverPayload>;
  dossierChangerGroupeInstructeur?: Maybe<DossierChangerGroupeInstructeurPayload>;
  dossierClasserSansSuite?: Maybe<DossierClasserSansSuitePayload>;
  dossierEnvoyerMessage?: Maybe<DossierEnvoyerMessagePayload>;
  dossierModifierAnnotationAjouterLigne?: Maybe<DossierModifierAnnotationAjouterLignePayload>;
  dossierModifierAnnotationCheckbox?: Maybe<DossierModifierAnnotationCheckboxPayload>;
  dossierModifierAnnotationDate?: Maybe<DossierModifierAnnotationDatePayload>;
  dossierModifierAnnotationDatetime?: Maybe<DossierModifierAnnotationDatetimePayload>;
  dossierModifierAnnotationIntegerNumber?: Maybe<DossierModifierAnnotationIntegerNumberPayload>;
  dossierModifierAnnotationText?: Maybe<DossierModifierAnnotationTextPayload>;
  dossierPasserEnInstruction?: Maybe<DossierPasserEnInstructionPayload>;
  dossierRefuser?: Maybe<DossierRefuserPayload>;
  dossierRepasserEnConstruction?: Maybe<DossierRepasserEnConstructionPayload>;
  dossierRepasserEnInstruction?: Maybe<DossierRepasserEnInstructionPayload>;
};

type MutationCreateDirectUploadArgs = {
  input: CreateDirectUploadInput;
};

type MutationDossierAccepterArgs = {
  input: DossierAccepterInput;
};

type MutationDossierArchiverArgs = {
  input: DossierArchiverInput;
};

type MutationDossierChangerGroupeInstructeurArgs = {
  input: DossierChangerGroupeInstructeurInput;
};

type MutationDossierClasserSansSuiteArgs = {
  input: DossierClasserSansSuiteInput;
};

type MutationDossierEnvoyerMessageArgs = {
  input: DossierEnvoyerMessageInput;
};

type MutationDossierModifierAnnotationAjouterLigneArgs = {
  input: DossierModifierAnnotationAjouterLigneInput;
};

type MutationDossierModifierAnnotationCheckboxArgs = {
  input: DossierModifierAnnotationCheckboxInput;
};

type MutationDossierModifierAnnotationDateArgs = {
  input: DossierModifierAnnotationDateInput;
};

type MutationDossierModifierAnnotationDatetimeArgs = {
  input: DossierModifierAnnotationDatetimeInput;
};

type MutationDossierModifierAnnotationIntegerNumberArgs = {
  input: DossierModifierAnnotationIntegerNumberInput;
};

type MutationDossierModifierAnnotationTextArgs = {
  input: DossierModifierAnnotationTextInput;
};

type MutationDossierPasserEnInstructionArgs = {
  input: DossierPasserEnInstructionInput;
};

type MutationDossierRefuserArgs = {
  input: DossierRefuserInput;
};

type MutationDossierRepasserEnConstructionArgs = {
  input: DossierRepasserEnConstructionInput;
};

type MutationDossierRepasserEnInstructionArgs = {
  input: DossierRepasserEnInstructionInput;
};

enum Order {
  Asc = "ASC",
  Desc = "DESC",
}

type PageInfo = {
  __typename?: "PageInfo";
  endCursor?: Maybe<Scalars["String"]>;
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
};

type ParcelleCadastrale = GeoArea & {
  __typename?: "ParcelleCadastrale";
  /** @deprecated Utilisez le champ `prefixe` à la place. */
  codeArr: Scalars["String"];
  /** @deprecated Utilisez le champ `commune` à la place. */
  codeCom: Scalars["String"];
  /** @deprecated Utilisez le champ `commune` à la place. */
  codeDep: Scalars["String"];
  commune: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  /** @deprecated L’information n’est plus disponible. */
  feuille: Scalars["Int"];
  geometry: GeoJson;
  id: Scalars["ID"];
  /** @deprecated Utilisez le champ `commune` à la place. */
  nomCom: Scalars["String"];
  numero: Scalars["String"];
  prefixe: Scalars["String"];
  section: Scalars["String"];
  source: GeoAreaSource;
  surface: Scalars["String"];
  /** @deprecated L’information n’est plus disponible. */
  surfaceIntersection: Scalars["Float"];
  /** @deprecated Utilisez le champ `surface` à la place. */
  surfaceParcelle: Scalars["Float"];
};

type PersonneMorale = Demandeur & {
  __typename?: "PersonneMorale";
  address: Address;
  /** @deprecated Utilisez le champ `address.label` à la place. */
  adresse: Scalars["String"];
  association?: Maybe<Association>;
  /** @deprecated Utilisez le champ `address.city_code` à la place. */
  codeInseeLocalite: Scalars["String"];
  /** @deprecated Utilisez le champ `address.postal_code` à la place. */
  codePostal: Scalars["String"];
  /** @deprecated Utilisez le champ `address` à la place. */
  complementAdresse?: Maybe<Scalars["String"]>;
  entreprise?: Maybe<Entreprise>;
  id: Scalars["ID"];
  libelleNaf: Scalars["String"];
  /** @deprecated Utilisez le champ `address.city_name` à la place. */
  localite: Scalars["String"];
  naf: Scalars["String"];
  /** @deprecated Utilisez le champ `address.street_name` à la place. */
  nomVoie?: Maybe<Scalars["String"]>;
  /** @deprecated Utilisez le champ `address.street_number` à la place. */
  numeroVoie?: Maybe<Scalars["String"]>;
  siegeSocial: Scalars["Boolean"];
  siret: Scalars["String"];
  /** @deprecated Utilisez le champ `address.street_address` à la place. */
  typeVoie?: Maybe<Scalars["String"]>;
};

type PersonnePhysique = Demandeur & {
  __typename?: "PersonnePhysique";
  civilite?: Maybe<Civilite>;
  dateDeNaissance?: Maybe<Scalars["ISO8601Date"]>;
  id: Scalars["ID"];
  nom: Scalars["String"];
  prenom: Scalars["String"];
};

type PieceJustificativeChamp = Champ & {
  __typename?: "PieceJustificativeChamp";
  file?: Maybe<File>;
  id: Scalars["ID"];
  label: Scalars["String"];
  stringValue?: Maybe<Scalars["String"]>;
};

type Profile = {
  __typename?: "Profile";
  email: Scalars["String"];
  id: Scalars["ID"];
};

type Query = {
  __typename?: "Query";
  demarche: Demarche;
  dossier: Dossier;
  groupeInstructeur: GroupeInstructeurWithDossiers;
};

type QueryDemarcheArgs = {
  number: Scalars["Int"];
};

type QueryDossierArgs = {
  number: Scalars["Int"];
};

type QueryGroupeInstructeurArgs = {
  number: Scalars["Int"];
};

type RepetitionChamp = Champ & {
  __typename?: "RepetitionChamp";
  champs: Array<Champ>;
  id: Scalars["ID"];
  label: Scalars["String"];
  stringValue?: Maybe<Scalars["String"]>;
};

type Revision = {
  __typename?: "Revision";
  annotationDescriptors: Array<ChampDescriptor>;
  champDescriptors: Array<ChampDescriptor>;
  dateCreation: Scalars["ISO8601DateTime"];
  datePublication?: Maybe<Scalars["ISO8601DateTime"]>;
  id: Scalars["ID"];
};

type SelectionUtilisateur = GeoArea & {
  __typename?: "SelectionUtilisateur";
  description?: Maybe<Scalars["String"]>;
  geometry: GeoJson;
  id: Scalars["ID"];
  source: GeoAreaSource;
};

type Service = {
  __typename?: "Service";
  id: Scalars["ID"];
  nom: Scalars["String"];
  organisme: Scalars["String"];
  siret?: Maybe<Scalars["String"]>;
  typeOrganisme: TypeOrganisme;
};

type SiretChamp = Champ & {
  __typename?: "SiretChamp";
  etablissement?: Maybe<PersonneMorale>;
  id: Scalars["ID"];
  label: Scalars["String"];
  stringValue?: Maybe<Scalars["String"]>;
};

type TextChamp = Champ & {
  __typename?: "TextChamp";
  id: Scalars["ID"];
  label: Scalars["String"];
  stringValue?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

type TitreIdentiteChamp = Champ & {
  __typename?: "TitreIdentiteChamp";
  grantType: TitreIdentiteGrantType;
  id: Scalars["ID"];
  label: Scalars["String"];
  stringValue?: Maybe<Scalars["String"]>;
};

enum TitreIdentiteGrantType {
  FranceConnect = "france_connect",
  PieceJustificative = "piece_justificative",
}

type Traitement = {
  __typename?: "Traitement";
  dateTraitement: Scalars["ISO8601DateTime"];
  emailAgentTraitant?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  motivation?: Maybe<Scalars["String"]>;
  state: DossierState;
};

enum TypeDeChamp {
  Text = "text",
  Textarea = "textarea",
  Date = "date",
  Datetime = "datetime",
  Number = "number",
  DecimalNumber = "decimal_number",
  IntegerNumber = "integer_number",
  Checkbox = "checkbox",
  Civilite = "civilite",
  Email = "email",
  Phone = "phone",
  Address = "address",
  YesNo = "yes_no",
  DropDownList = "drop_down_list",
  MultipleDropDownList = "multiple_drop_down_list",
  LinkedDropDownList = "linked_drop_down_list",
  Pays = "pays",
  Regions = "regions",
  Departements = "departements",
  Communes = "communes",
  Engagement = "engagement",
  HeaderSection = "header_section",
  Explication = "explication",
  DossierLink = "dossier_link",
  PieceJustificative = "piece_justificative",
  Siret = "siret",
  Carte = "carte",
  Repetition = "repetition",
  TitreIdentite = "titre_identite",
  Iban = "iban",
  AnnuaireEducation = "annuaire_education",
  Cnaf = "cnaf",
  Dgfip = "dgfip",
  PoleEmploi = "pole_emploi",
  Mesri = "mesri",
}

enum TypeOrganisme {
  AdministrationCentrale = "administration_centrale",
  Association = "association",
  CollectiviteTerritoriale = "collectivite_territoriale",
  EtablissementEnseignement = "etablissement_enseignement",
  OperateurDEtat = "operateur_d_etat",
  ServiceDeconcentreDeLEtat = "service_deconcentre_de_l_etat",
  Autre = "autre",
}

type ValidationError = {
  __typename?: "ValidationError";
  message: Scalars["String"];
};
