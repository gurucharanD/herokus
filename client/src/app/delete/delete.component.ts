import { Component, OnInit } from '@angular/core';

import {MovieService} from '../movie.service';
import {Movie} from '../movie'
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {


    movies:Movie[]=[]
  

  constructor(private movieService:MovieService)
   {
     this.movieService.getMovies().subscribe(movies=>this.movies=movies)
   }
  

  ngOnInit() 
  {
    console.log("home coponent")
  }
  deleteMovie(id:any)
  {
    var movies=this.movies
    this.movieService.deleteMovie(id).subscribe(data=>{
      if(data.n==1)
      {
        for(var i=0;i<movies.length;i++)
          {
            if(movies[i]._id==id)
              {
                movies.splice(i,1)
              }
          }
      }
    })
  }
}

