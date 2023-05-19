import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  trendingMovies = [];
  trendingTv = [];
  imgPrefix = 'https://image.tmdb.org/t/p/w500';


  constructor(_MovieService: MovieService) {

    _MovieService.getTrendingMovies().subscribe((data: any) => {
      this.trendingMovies = data.results;
      console.log(this.trendingMovies);
      // console.log(typeof(this.trendingMovies));

    }, (err: any) => {
      console.log(err);
    })


    _MovieService.getTrendingTv().subscribe((data: any) => {
      this.trendingTv = data.results;
      console.log(this.trendingTv);
      // console.log(typeof(this.trendingMovies));

    }, (err: any) => {
      console.log(err);
    })

  }

}
