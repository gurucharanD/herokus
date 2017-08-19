import { Component } from '@angular/core';
import {MovieService} from './movie.service';
import {Movie} from './movie'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers:[MovieService]
})
export class AppComponent {
  movies:Movie[]
  constructor(private movieService:MovieService){
    this.movieService.getMovies().subscribe(movies=>this.movies=movies)
  }
 

  
}
