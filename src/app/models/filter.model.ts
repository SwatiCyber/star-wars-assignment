export class FilterModel {
  birth: string[];
  films: string | null;
  species: string | null;
  vehicles: string | null;
  starships: string | null;

  constructor(
    birth: string[] = [],
    films: string | null = null,
    species: string | null = null,
    vehicles: string | null = null,
    starships: string | null = null
  ) {
    this.birth = birth;
    this.films = films;
    this.species = species;
    this.vehicles = vehicles;
    this.starships = starships;
  }
}