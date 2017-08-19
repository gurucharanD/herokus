import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import {Actor} from '../actors'

@Component({
  selector: 'add-actor',
  templateUrl: './addactors.component.html',
  styleUrls: ['./movies.component.css'],
  providers:[MovieService]
})
export class AddActorComponent implements OnInit {
    actors:Actor[]=[]
    actor:Actor;
    image_url:String;
    name:String;
    age:Number;
    gender:String;
    acted:String;
    movies=[]
  constructor(private movieService:MovieService) { }

  addActor()
  {
   this.movies=[]=this.acted.split(",")

    const newActor={
      name:this.name,
      image_url:this.image_url,
      age:this.age,
      gender:this.gender,
      acted:this.movies
    }
    this.movieService.addActor(newActor).subscribe(actor=>{
      this.actors.push(actor) 
       window.alert("Added Item")
            return false
    })
    
  }
  ngOnInit() {
    
  }

}
