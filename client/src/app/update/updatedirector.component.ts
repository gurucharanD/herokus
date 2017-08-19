import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import {Director} from '../director'



@Component({
  selector: 'director-update',
  templateUrl: './updatedirector.component.html',
  styleUrls: ['./update.component.css']
})
export class DirectorUpdateComponent implements OnInit {
  
  directors:Director[]=[]
  directorname:String
    
    id:String
    image_url:String;
    name:String;
    age:Number;
    gender:String
    directed_movies:Array<String>
  

   

constructor(private movieService:MovieService) {
     this.movieService.getDirectors().subscribe(directors=>this.directors=directors)
   }
    

  ngOnInit() {
    console.log("")
  }

  search()
{
  var size:number=this.directors.length
  var found=0
  console.log(size)
  for(let i=0;i<size;i++)
  {

    let searchmovie=this.directors[i].name.toString().toLowerCase()


      console.log(i+" "+searchmovie+" "+this.directorname)

    if(this.directorname.toLowerCase() == searchmovie)
      {

      this.id=this.directors[i]._id
      this.image_url=this.directors[i].image_url.toString()
      this.name=this.directors[i].name.toString()
      this.age=this.directors[i].age
      this.directed_movies=this.directors[i].directed_movies
      this.gender=this.directors[i].gender


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
      updateDirector()
    {
      const newDirector={
      id:this.id,
      name:this.name,
      image_url:this.image_url,
      age:this.age,
      gender:this.gender,
      directed_movies:this.directed_movies
      }

      console.log(newDirector)
     
     this.movieService.updateDirector(newDirector).subscribe(director=>{
     this.directors.push(director) 
    })

}
}
