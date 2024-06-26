import { Component, OnInit } from '@angular/core';
import { CommonModules } from '../shared/common.module';
import { StarWarsService } from '../services/star-wars.service';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FilterModel } from '../models/filter.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CommonModules, NgbPaginationModule, NgSelectModule, RouterModule],
  providers: [StarWarsService],
})
export class HomeComponent implements OnInit {
  collectionSize = 0;
  page = 1;
  pageSize = 5;

  filter: FilterModel = new FilterModel();

  characters: any[] = [];
  films: any[] = [];
  species: any[] = [];
  planets: any[] = [];
  vehicles: any[] = [];
  starships: any[] = [];
  uniqueBirthYears: any[] = [];

  constructor(private swapiService: StarWarsService) {}

  ngOnInit() {
    this.loadCharacters(this.page);

    this.swapiService.getFilms().subscribe((data) => {
      this.films = data;
    });

    this.swapiService.getSpecies().subscribe((data) => {
      this.species = data;
    });

    this.swapiService.getVehicles().subscribe((data) => {
      this.vehicles = data;
    });

    this.swapiService.getStarships().subscribe((data) => {
      this.starships = data;
    });
  }

  loadCharacters(page: number) {
    this.swapiService.getCharacters(page).subscribe((data: any) => {
      this.collectionSize = data.count;
      this.characters = [...data.results];
      this.uniqueBirthYears = this.getUniqueBirthYears(this.characters);
      // this.uniqueBirthYears.unshift({
      //   index: 0,
      //   name: 'All',
      // });
      this.onChangeFilter();
    });
  }

  getUniqueBirthYears(characters: any[]): any[] {
    const birthYears = characters.map((char) => char.birth_year);
    const uniqueBirthYears = Array.from(new Set(birthYears)).map(
      (year, index) => ({
        index: index + 1,
        name: year,
      })
    );
    return uniqueBirthYears;
  }

  getSpeciesName(url: string): string {
    let species = this.species.find((x) => x.url == url);
    return species?.name || '';
  }

  filteredCharacters: any[] = [];
  onChangeFilter() {
    this.filteredCharacters = this.characters.filter((char) => {
      const matchesBirthYear =
        this.filter.birth.length > 0
          ? this.filter.birth.includes(char.birth_year)
          : true;
      const matchesFilm = this.filter.films
        ? char.films.includes(this.filter.films)
        : true;
      const matchesSpecies = this.filter.species
        ? char.species.includes(this.filter.species)
        : true;
      const matchesVehicle = this.filter.vehicles
        ? char.vehicles.includes(this.filter.vehicles)
        : true;
      const matchesStarship = this.filter.starships
        ? char.starships.includes(this.filter.starships)
        : true;
      return (
        matchesBirthYear &&
        matchesFilm &&
        matchesSpecies &&
        matchesVehicle &&
        matchesStarship
      );
    });
  }

  clearFilters() {
    this.filter = new FilterModel()
    this.onChangeFilter();
  }

  getCharacterId(url: string): string {
    return url.split('/').filter(segment => segment).pop()!;
  }
}

