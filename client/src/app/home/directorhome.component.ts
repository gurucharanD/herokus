import { Component, OnInit } from '@angular/core';

import {MovieService} from '../movie.service';
import {Director} from '../director'
@Component({
  selector: 'app-home',
  templateUrl: './directorhome.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class DirectorHomeComponent implements OnInit {
  directors:Director[]=[]
  error:String

  constructor(private movieService:MovieService) {
     this.movieService.getDirectors().subscribe(directors=>this.directors=directors,Error=>this.error=Error)
   }

  ngOnInit() {
    console.log("home coponent")
  }


   
}





