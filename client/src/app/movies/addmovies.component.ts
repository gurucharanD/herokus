import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import {Movie} from '../movie'

@Component({
  selector: 'add-movies',
  templateUrl: './addmovies.component.html',
  styleUrls: ['./movies.component.css'],
  providers:[MovieService]
})
export class AddMoviesComponent implements OnInit {
    movies:Movie[]=[]
     image_url:String;
    movie:Movie
    movie_name:String;
    description?:String;
    year:Number;
    rating:Number;
    actors:String;
    directors:String;
    actorsarray=[]
    directorsarray=[]

  constructor(private movieService:MovieService) { }

  addMovie()
  {
    this.actorsarray=[]=this.actors.split(",")
    this.directorsarray=[]=this.directors.split(",")
    const newMovie={
      image_url:this.image_url,
      movie_name:this.movie_name,
      description:this.description,
      year:this.year,
      rating:this.rating,
      actors:this.actorsarray,
      directors:this.directorsarray
    }
    this.movieService.addMovie(newMovie).subscribe(movie=>{
      this.movies.push(movie) 
      window.alert("Added Item")
            return false
    })
    
  }
  
 
  ngOnInit() {
    
  }

}
