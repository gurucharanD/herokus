import { Component, OnInit } from '@angular/core';

import {MovieService} from '../movie.service';
import {Movie} from '../movie'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {
  movies:Movie[]=[]
  error:String

  constructor(private movieService:MovieService) {
     this.movieService.getMovies().subscribe(movies=>this.movies=movies,Error=>this.error=Error)
   }

  ngOnInit() {
    console.log("home coponent")
  }


   
}





