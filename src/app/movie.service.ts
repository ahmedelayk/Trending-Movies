import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(public _HttpClient: HttpClient) { }
  getTrendingMovies():Observable<any>
  {
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/week?api_key=5d23810c43bdd67dc3aa9423f5fd642d');
  }
  getTrendingTv():Observable<any>
  {
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/week?api_key=5d23810c43bdd67dc3aa9423f5fd642d');
  }


}
