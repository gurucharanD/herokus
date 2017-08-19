import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import {Director} from '../director'

@Component({
  selector: 'add-director',
  templateUrl: './adddirectors.component.html',
  styleUrls: ['./movies.component.css'],
  providers:[MovieService]
})
export class AddDirectorComponent implements OnInit {
    directors:Director[]=[];
    director:Director;
    image_url:String;
    name:String;
    age:Number;
    gender:String;
    directed_movies:String;
    movies=[]

  constructor(private movieService:MovieService) { }

  addDirector()
  {
    this.movies=[]=this.directed_movies.split(",")
    const newDirector={
      name:this.name,
      image_url:this.image_url,
      age:this.age,
      gender:this.gender,
      directed_movies:this.movies
    }
    this.movieService.addDirector(newDirector).subscribe(director=>{
      this.directors.push(director) 
      window.alert("Added Item")
            return false
    })
    
  }
  ngOnInit() {
    
  }

}
