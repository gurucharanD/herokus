import { Component, OnInit } from '@angular/core';

import {MovieService} from '../movie.service';
import {Actor} from '../actors'
@Component({
  selector: 'actor-home',
  templateUrl: './actorhome.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class ActorHomeComponent implements OnInit {
  actors:Actor[]=[]
  error:String

  constructor(private movieService:MovieService) {
     this.movieService.getActors().subscribe(actors=>this.actors=actors,Error=>this.error=Error)
   }

  ngOnInit() {
    console.log("home coponent")
  }


   
}





