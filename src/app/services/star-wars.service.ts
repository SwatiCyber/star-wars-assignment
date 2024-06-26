import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  private baseURL = 'https://swapi.dev/api';

  constructor(private http: HttpClient) { }

  getCharacters(page: number = 1): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/people/?page=${page}`).pipe(
      map(response => response)
    );
  }

  getCharacter(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/people/${id}`);
  }

  getFilms(): Observable<any[]> {
    return this.http.get<any>(`${this.baseURL}/films/`).pipe(
      map(response => response.results)
    );
  }

  getSpecies(): Observable<any[]> {
    return this.http.get<any>(`${this.baseURL}/species/`).pipe(
      map(response => response.results)
    );
  }

  getPlanets(): Observable<any[]> {
    return this.http.get<any>(`${this.baseURL}/planets/`).pipe(
      map(response => response.results)
    );
  }

  getVehicles(): Observable<any[]> {
    return this.http.get<any>(`${this.baseURL}/vehicles/`).pipe(
      map(response => response.results)
    );
  }

  getStarships(): Observable<any[]> {
    return this.http.get<any>(`${this.baseURL}/starships/`).pipe(
      map(response => response.results)
    );
  }

}
