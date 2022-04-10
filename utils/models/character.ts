export type TCharacterInfo = {
    id: string;
    name: string;
    birthYear: string;
    gender: string;
    height: number;
    mass: number;
    hairColor: string;
    skinColor: string;
    homeworld: {
      name: string;
    };
    species: {
      name: string;
    };
    filmConnection: {
      totalCount: number;
      films: {
        title: string;
        director: string;
        planetConnection: {
          planets: {
            name: string;
          }[];
        };
      }[];
    };
  };