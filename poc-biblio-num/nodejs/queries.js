import { fragments } from "./fragments.js"


const revisionFragment = `fragment RevisionFragment on Revision {
    id
    champDescriptors {
      ...ChampDescriptorFragment
      champDescriptors {
        ...ChampDescriptorFragment
      }
    }
    annotationDescriptors {
      ...ChampDescriptorFragment
      champDescriptors {
        ...ChampDescriptorFragment
      }
    }
  }

  fragment ChampDescriptorFragment on ChampDescriptor {
    id
    type
    label
    description
    required
    options
  }

`

export const getGroupeInstructeur = `
query getGroupeInstructeur(
  $groupeInstructeurNumber: Int!
  $state: DossierState
  $order: Order
  $after: String
) {
  groupeInstructeur(number: $groupeInstructeurNumber) {
    id
    number
    label
    instructeurs {
      id
      email
    }
    dossiers(state: $state, order: $order, after: $after) {
      nodes {
        ...DossierFragment
      }
    }
  }
}
`
export const getDossier = `      
query getDossier($dossierNumber: Int!) {
  dossier(number: $dossierNumber) {
    ...DossierFragment
    demarche {
      ...DemarcheDescriptorFragment
    }
  }
}

fragment DemarcheDescriptorFragment on DemarcheDescriptor {
    id
    number
    title
    description
    state
    declarative
    dateCreation
    datePublication
    dateDerniereModification
    dateDepublication
    dateFermeture
  }

`
export const getDeletedDossiers = `      
query getDeletedDossiers($demarcheNumber: Int!, $order: Order, $after: String) {
    demarche(number: $demarcheNumber) {
      deletedDossiers(order: $order, after: $after) {
        nodes {
          ...DeletedDossierFragment
        }
      }
    }
  }
fragment DeletedDossierFragment on DeletedDossier {
    id
    number
    dateSupression
    state
    reason
  }

`


export const getDemarcheQueryGraphQL = () => {

    const query = `query getDemarche(
        $demarcheNumber: Int!
        $state: DossierState
        $order: Order
        $after: String
      ) {
        demarche(number: $demarcheNumber) {
          id
          number
          title
          groupeInstructeurs {
            id
            number
            label
            instructeurs {
              id
              email
            }
          }
          dossiers(state: $state, order: $order, after: $after) {
            nodes {
              ...DossierFragment
            }
          }
        }
      }
      
      fragment DossierFragment on Dossier {
        id
        number
        archived
        state
        dateDerniereModification
        dateDepot
        datePassageEnConstruction
        datePassageEnInstruction
        dateTraitement
        motivation
        motivationAttachment {
          ...FileFragment
        }
        attestation {
          ...FileFragment
        }
        pdf {
          url
        }
        instructeurs {
          email
        }
        groupeInstructeur {
          id
          number
          label
        }
        traitements {
          state
          emailAgentTraitant
          dateTraitement
          motivation
        }
        champs {
          ...ChampFragment
          ...RootChampFragment
        }
        annotations {
          ...ChampFragment
          ...RootChampFragment
        }
        avis {
          ...AvisFragment
        }
        messages {
          ...MessageFragment
        }
        demandeur {
          ... on PersonnePhysique {
            civilite
            nom
            prenom
            dateDeNaissance
          }
          ...PersonneMoraleFragment
        }
      }
                              
      fragment AvisFragment on Avis {
        id
        question
        reponse
        dateQuestion
        dateReponse
        claimant {
          email
        }
        expert {
          email
        }
        attachment {
          ...FileFragment
        }
      }
      
      fragment MessageFragment on Message {
        id
        email
        body
        createdAt
        attachment {
          ...FileFragment
        }
      }
      
      fragment GeoAreaFragment on GeoArea {
        id
        source
        description
        geometry {
          type
          coordinates
        }
        ... on ParcelleCadastrale {
          commune
          numero
          section
          prefixe
          surface
        }
      }
      
      fragment RootChampFragment on Champ {
        ... on RepetitionChamp {
          champs {
            ...ChampFragment
          }
        }
        ... on SiretChamp {
          etablissement {
            ...PersonneMoraleFragment
          }
        }
        ... on CarteChamp {
          geoAreas {
            ...GeoAreaFragment
          }
        }
        ... on DossierLinkChamp {
          dossier {
            id
            state
            usager {
              email
            }
          }
        }
      }
      
      fragment ChampFragment on Champ {
        id
        label
        stringValue
        ... on DateChamp {
          date
        }
        ... on DatetimeChamp {
          datetime
        }
        ... on CheckboxChamp {
          checked: value
        }
        ... on DecimalNumberChamp {
          decimalNumber: value
        }
        ... on IntegerNumberChamp {
          integerNumber: value
        }
        ... on CiviliteChamp {
          civilite: value
        }
        ... on LinkedDropDownListChamp {
          primaryValue
          secondaryValue
        }
        ... on MultipleDropDownListChamp {
          values
        }
        ... on PieceJustificativeChamp {
          file {
            ...FileFragment
          }
        }
        ... on AddressChamp {
          address {
            ...AddressFragment
          }
        }
        ... on CommuneChamp {
          commune {
            name
            code
          }
          departement {
            name
            code
          }
        }
      }
      
      fragment PersonneMoraleFragment on PersonneMorale {
        siret
        siegeSocial
        naf
        libelleNaf
        address {
          ...AddressFragment
        }
        entreprise {
          siren
          capitalSocial
          numeroTvaIntracommunautaire
          formeJuridique
          formeJuridiqueCode
          nomCommercial
          raisonSociale
          siretSiegeSocial
          codeEffectifEntreprise
          dateCreation
          nom
          prenom
          attestationFiscaleAttachment {
            ...FileFragment
          }
          attestationSocialeAttachment {
            ...FileFragment
          }
        }
        association {
          rna
          titre
          objet
          dateCreation
          dateDeclaration
          datePublication
        }
      }
      
      fragment FileFragment on File {
        filename
        contentType
        checksum
        byteSizeBigInt
        url
      }
      
      fragment AddressFragment on Address {
        label
        type
        streetAddress
        streetNumber
        streetName
        postalCode
        cityName
        cityCode
        departmentName
        departmentCode
        regionName
        regionCode
      }`
    return query
}