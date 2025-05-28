import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieApiService } from '../../services/movie-api.service'; 
import { AutoScrollDirective } from '../../directives/auto-scroll.directive';


@Component({
  selector: 'app-home',
  imports: [CommonModule, AutoScrollDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor (private service: MovieApiService) {}

  bannerResults: any = [];
  trendingMovieResults: any = [];
  trendingSerieResults: any = [];
  popularActionMovieResults: any = [];
  popularComedyMovieResults: any = [];
  popularFantasyMovieResults: any = [];


  ngOnInit(): void {
    this.bannerData();
    this.trendingMovieData();
    this.trendingSerieData();
    this.popularActionMovieData();
    this.popularComedyMovieData();
    this.popularFantasyMovieData();
  }


  // Consumode serviço de banner
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      //console.log(result)
      this.bannerResults = result.results;
    }) 
  }
  //Filmes em destaques
   trendingMovieData() {
    this.service.trendingMovieApiData().subscribe((result) =>{
      this.trendingMovieResults = result.results;
    })
   }

   //Séries em Destaques
   trendingSerieData() {
    this.service.trendingSerieApiData().subscribe((result) =>{
      this.trendingSerieResults = result.results;
    })
   }

   //Filmes Populares
   popularActionMovieData(){
    this.service.popularActionMovieApiData().subscribe((result) =>{
      this.popularActionMovieResults = result.results;
    })
   }
   //Filmes Populares
   popularComedyMovieData(){
    this.service.popularActionMovieApiData().subscribe((result) =>{
      this.popularComedyMovieResults = result.results;
    })
   }
   //Filmes Populares
   popularFantasyMovieData(){
    this.service.popularFantasyMovieApiData().subscribe((result) =>{
      this.popularFantasyMovieResults = result.results;
    })
   }

}
