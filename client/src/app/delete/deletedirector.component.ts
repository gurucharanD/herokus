import { Component, OnInit } from '@angular/core';

import {MovieService} from '../movie.service';
import {Director} from '../director';
@Component({
  selector: 'director-delete',
  templateUrl: './deletedirector.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteDirectorComponent implements OnInit {


    directors:Director[]=[]
  

  constructor(private movieService:MovieService)
   {
     this.movieService.getDirectors().subscribe(directors=>this.directors=directors)
   }
  

  ngOnInit() 
  {
    console.log("home coponent")
  }
  deleteDirector(id:any)
  {
    var directors=this.directors
    this.movieService.deleteDirector(id).subscribe(data=>{
      if(data.n==1)
      {
        for(var i=0;i<directors.length;i++)
          {
            if(directors[i]._id==id)
              {
                directors.splice(i,1)
              }
          }
      }
    })
  }
}

