import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Movie} from './movie';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'

@Injectable()
export class MovieService {

  constructor(private http:Http) { }

  // front end retriving movies,actors,directors from db through server
  getMovies()
  {
    return this.http.get('/api/movieslist')
    .map(res=>res.json())
    .do(data=>console.log(data))
    .catch(this.handleError)
  }

  getActors()
  {
    return this.http.get('/api/actorslist')
    .map(res=>res.json())
    .do(data=>console.log(data))
    .catch(this.handleError)
  }

  getDirectors()
  {
    return this.http.get('/api/directorslist')
    .map(res=>res.json())
    .do(data=>console.log(data))
    .catch(this.handleError)
  }



  // front end adding movies,actors,directors into db through server
  addMovie(newMovie)
  {
    var headers=new Headers()
    headers.append('content-type','application/json');
    return this.http.post('/api/addmovie',newMovie,{headers:headers})
    .map(res=>res.json())
    .do(data=>console.log(data))
    .catch(this.handleError)

  }

  addActor(newActor)
  {
    var headers=new Headers()
    headers.append('content-type','application/json');
    return this.http.post('/api/addactor',newActor,{headers:headers})
    .map(res=>res.json())
    .do(data=>console.log(data))
    .catch(this.handleError)

  }

  addDirector(newDirector)
  {
    var headers=new Headers()
    headers.append('content-type','application/json');
    return this.http.post('/api/adddirector',newDirector,{headers:headers})
    .map(res=>res.json())
    .do(data=>console.log(data))
    .catch(this.handleError)

  }



  //delete movies,actors,directors from db through server
  deleteMovie(id)
  {
    return this.http.delete('/api/deletemovie/'+id)
    .map(res=>res.json())
    .do(data=>console.log(data))
    .catch(this.handleError)
  }
  
   deleteActor(id)
  {
    return this.http.delete('/api/deleteactor/'+id)
    .map(res=>res.json())
    .do(data=>console.log(data))
    .catch(this.handleError)
  }

   deleteDirector(id)
  {
    return this.http.delete('/api/deletedirector/'+id)
    .map(res=>res.json())
    .do(data=>console.log(data))
    .catch(this.handleError)
  }

  //Update operations on movies,acctors.directors
  updateMovie(newMovie)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
    .put('/api/updatemovie/'+newMovie.id, JSON.stringify(newMovie), {headers: headers})
    .map(res => res.json())
    .do(data=>console.log(data))
    .catch(this.handleError);
  }

  //Update operations on movies,acctors.directors
  updateDirector(newDirector)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
    .put('/api/updatedirector/'+newDirector.id, JSON.stringify(newDirector), {headers: headers})
    .map(res => res.json())
    .do(data=>console.log(data))
    .catch(this.handleError);
  }

  //Update operations on movies,acctors.directors
  updateActor(newActor)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
    .put('/api/updateactor/'+newActor.id, JSON.stringify(newActor), {headers: headers})
    .map(res => res.json())
    .do(data=>console.log(data))
    .catch(this.handleError);
  }



  //HANDLING ERRORS
     private handleError(error:Response)
    {
       console.error(error);
       let message="Error Status Code" +error.status+"at"+error.url
       return Observable.throw(message);
    }
}
