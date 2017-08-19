import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import {Actor} from '../actors'



@Component({
  selector: 'actor-update',
  templateUrl: './updateactor.component.html',
  styleUrls: ['./update.component.css']
})
export class ActorUpdateComponent implements OnInit {
  
  actors:Actor[]=[]
  actorname:String


    id:String
    image_url:String;
    name:String;
    age:Number;
    gender:String
    acted:Array<String>
  

   

constructor(private movieService:MovieService) {
     this.movieService.getActors().subscribe(actors=>this.actors=actors)
   }
    

  ngOnInit() {
    console.log("")
  }

  search()
{
  var size:number=this.actors.length
  var found=0
  console.log(size)
  for(let i=0;i<size;i++)
  {

    let searchmovie=this.actors[i].name.toString().toLowerCase()


      console.log(i+" "+searchmovie+" "+this.actorname)

    if(this.actorname.toLowerCase() == searchmovie)
      {

      this.id=this.actors[i]._id
      this.image_url=this.actors[i].image_url.toString()
      this.name=this.actors[i].name.toString()
      this.age=this.actors[i].age
      this.acted=this.actors[i].acted
      this.gender=this.actors[i].gender


      found=1
      break

      }
    
  }
    if(found==0)
      {
            window.alert('Invalid Search Item')
            return false

      }
}
    updateActor()
    {
      const newActor={
      id:this.id,
      image_url:this.image_url,
      name:this.name,
      age:this.age,
      gender:this.gender,
      acted:this.acted 
      }

      console.log(newActor)
     
     this.movieService.updateActor(newActor).subscribe(actor=>{
     this.actors.push(actor) 
    })
}
}
