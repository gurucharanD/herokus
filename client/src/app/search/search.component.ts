import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import {Movie} from '../movie'
import {Actor} from '../actors'
import {Director} from '../director'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    movies:Movie[]=[]
    moviename:String
    
    id:String
    image_url:String;
    movie_name:String;
    description?:String;
    year:Number;
    rating:Number;
    actors:Array<String>
    directors:Array<String>;



    actor:Actor[]=[]
    actorname:String
    

    actor_image_url:String;
    actor_name:String;
    actor_age:Number;
    actor_gender:String
    actor_acted:Array<String>


   director:Director[]=[]
   directorname:String
    

    director_image_url:String;
    director_name:String;
    director_age:Number;
    director_gender:String
    directed_movies:Array<String>

   

constructor(private movieService:MovieService) {

     this.movieService.getMovies().subscribe(movies=>this.movies=movies)
     this.movieService.getActors().subscribe(actor=>this.actor=actor)
     this.movieService.getDirectors().subscribe(director=>this.director=director)

   }
    

  ngOnInit() {
    console.log("")
  }

  searchMovie()
{
  var size:number=this.movies.length
  var moviefound=false
  console.log(size)
  for(let i=0;i<size;i++)
  {

    let searchmovie=this.movies[i].movie_name.toString().toLowerCase()


      console.log(i+" "+searchmovie+" "+this.moviename)

    if(this.moviename.toLowerCase() == searchmovie)
      {
      this.id=this.movies[i]._id
      this.image_url=this.movies[i].image_url.toString()
      this.movie_name=this.movies[i].movie_name.toString()
      this.description=this.movies[i].description.toString()
      this.year=this.movies[i].year
      this.rating=this.movies[i].rating
      this.actors=this.movies[i].actors
      this.directors=this.movies[i].directors

      moviefound=true
      break

      }
    
  }
    if(moviefound == false)
      {
            window.alert('Invalid Search Item')
            return false

      }
}


 searchActor()
{
  var size:number=this.actor.length
  var actorfound=false
  console.log(size)
  for(let i=0;i<size;i++)
  {

    let searchactor=this.actor[i].name.toString().toLowerCase()


      

    if(this.actorname.toLowerCase() == searchactor)
      {

      
      this.actor_image_url=this.actor[i].image_url.toString()
      this.actor_name=this.actor[i].name.toString()
      this.actor_age=this.actor[i].age
      this.actor_acted=this.actor[i].acted
      this.actor_gender=this.actor[i].gender


      actorfound=true
      break

      }
    
  }
    if(actorfound==false)
      {
            window.alert('Invalid Search Item')
            return false

      }
}



searchDirector()
{
  var size:number=this.director.length
  var directorfound=false
  console.log(size)
  for(let i=0;i<size;i++)
  {

    let searchdirector=this.director[i].name.toString().toLowerCase()

    if(this.directorname.toLowerCase() == searchdirector)
      {

      
      this.director_image_url=this.director[i].image_url.toString()
      this.director_name=this.director[i].name.toString()
      this.director_age=this.director[i].age
      this.directed_movies=this.director[i].directed_movies
      this.director_gender=this.director[i].gender


      directorfound=true
      break

      }
    
  }
    if(directorfound==false)
      {
            window.alert('Invalid Search Item')
            return false

      }
}


}
