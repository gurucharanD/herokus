import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import {Movie} from '../movie'



@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
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

   

constructor(private movieService:MovieService) {
     this.movieService.getMovies().subscribe(movies=>this.movies=movies)
   }
    

  ngOnInit() {
    console.log("")
  }

  search()
{
  var size:number=this.movies.length
  var found=0
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
    updateMovie()
    {
      const newMovie={
      id:this.id,
      image_url:this.image_url,
      movie_name:this.movie_name,
      description:this.description,
      year:this.year,
      rating:this.rating,
      actors:this.actors,
      directors:this.directors
      }

      console.log(newMovie)
     
     this.movieService.updateMovie(newMovie).subscribe(movie=>{
      this.movies.push(movie) 
      
    })
    }
}
