import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://api.themoviedb.org/3";
  options = {
    method: "GET",
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3M2EyYmY0ZmFhZDFiZDhiMmJkN2VjNjQ1OTc5MDRiOSIsIm5iZiI6MTc0NzI2MTIyMS44MTksInN1YiI6IjY4MjUxNzI1ZTFjMDdkNjg4OTJkMjYzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SzSfcvZJw2HKd2mDnLamOjyoSofcYpP-nYWPj0qQkeI,'
    }
  };

  // Banner de Midias da semana 
  bannerApiData(): Observable<any>{
    return this.http.get(`${this.baseUrl}/trending/all/weak?language=pt-br`, this.options);
  }

  // Filmes em Destaque do Dia 
  trendingMovieApiData(): Observable<any>{
    return this.http.get(`${this.baseUrl}/trending/movie/day?language=pt-br`, this.options);
  }
  
  // Série em Destaque do Dia 
  trendingSerieApiData(): Observable<any>{
    return this.http.get(`${this.baseUrl}/trending/tv/day?language=pt-br`, this.options);
  }
  
  // Files de Ação mais Populares 
  popularActionMovieApiData(): Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?language=pt-br&with_genres=28&sort_by=popularity.desc`, this.options);
  }

   // Files de Comedia mais Populares 
   popularComedyMovieApiData(): Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?language=pt-br&with_genres=35&sort_by=popularity.desc`, this.options);
  }
  
  // Files de Comedia mais Populares 
   popularFantasyMovieApiData(): Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?language=pt-br&with_genres=14&sort_by=popularity.desc`, this.options);
  }




}