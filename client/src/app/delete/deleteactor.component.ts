import { Component, OnInit } from '@angular/core';

import {MovieService} from '../movie.service';
import {Actor} from '../actors'
@Component({
  selector: 'actor-delete',
  templateUrl: './deleteactor.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteActorComponent implements OnInit {


    actors:Actor[]=[]
  

  constructor(private movieService:MovieService)
   {
     this.movieService.getActors().subscribe(actors=>this.actors=actors)
   }
  

  ngOnInit() 
  {
    console.log("home coponent")
  }
  
  deleteActor(id:any)
  {
    var actors=this.actors
    this.movieService.deleteActor(id).subscribe(data=>{
      if(data.n==1)
      {
        for(var i=0;i<actors.length;i++)
          {
            if(actors[i]._id==id)
              {
                actors.splice(i,1)
              }
          }
      }
    })
  }
}

