

import { gql } from "@apollo/client";
export const getCharacters = gql`
  query AllPeople {
    allPeople {
      people {
        id
        name
        birthYear
        gender
        height
        mass
        hairColor
        skinColor
        homeworld {
          name
        }
        filmConnection {
          totalCount
          films {
            title
            director
            planetConnection {
              planets {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const getCharacterDetail = gql`
  query Person($id: ID!) {
    person(id: $id) {
      id
      name
      birthYear
      gender
      height
      mass
      hairColor
      skinColor
      homeworld {
        name
      }
      species {
        name
      }
      filmConnection {
        totalCount
        films {
          title
          director
          planetConnection {
            planets {
              name
            }
          }
        }
      }
    }
  }
`;
