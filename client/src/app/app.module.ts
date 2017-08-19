//importing system modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import{ FormsModule } from '@angular/forms';
import { RouterModule, Routes,CanActivate } from'@angular/router';
import { ActivatedRoute } from '@angular/router';


//custom imports
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { AddMoviesComponent } from './movies/addmovies.component';
import { AddDirectorComponent } from './movies/adddirector.component';
import { AddActorComponent } from './movies/addactors.component';
import { Movie } from './movie';
import {Actor} from './actors';
import {Director} from './director';
import { HomeComponent } from './home/home.component';
import {DirectorHomeComponent} from './home/directorhome.component';
import {ActorHomeComponent} from './home/actorhome.component';
import {CSSCarouselComponent} from './home/carousel.component';
import { DeleteComponent } from './delete/delete.component';
import { DeleteActorComponent } from './delete/deleteactor.component';
import { DeleteDirectorComponent } from './delete/deletedirector.component';
import {LoginService}  from './login.service';
import { ActivationViaAuthenticationGuard } from './routing.guard';
import { UpdateComponent } from './update/update.component';
import { ActorUpdateComponent } from './update/updateactor.component';
import { DirectorUpdateComponent } from './update/updatedirector.component';
import { SearchComponent } from './search/search.component';




//Routes Array
const appRoutes: Routes = [
  {path:'',component: SearchComponent},
  {path:'movies',component:HomeComponent},
  {path:'actors',component:ActorHomeComponent},
  {path:'directors',component:DirectorHomeComponent},
  { path: 'movie', component:AddMoviesComponent,canActivate: [ ActivationViaAuthenticationGuard ]},
  { path: 'actor', component:AddActorComponent },
  { path: 'director', component:AddDirectorComponent },
  {path:'deletemovie',component:DeleteComponent},
  { path: 'deleteactor', component:DeleteActorComponent },
  { path: 'deletedirector', component:DeleteDirectorComponent },
  {path:'updatemovie',component:UpdateComponent},
  {path:'updateactor',component:ActorUpdateComponent},
  {path:'updatedirector',component:DirectorUpdateComponent}

  
]

@NgModule({
  declarations: [

    AppComponent,
    MoviesComponent,
    HomeComponent,
    CSSCarouselComponent,
    DeleteComponent,
    AddDirectorComponent,
    AddActorComponent,
    AddMoviesComponent,
    DeleteActorComponent,
    DeleteDirectorComponent,
    ActorHomeComponent,
    DirectorHomeComponent,
    UpdateComponent,
    SearchComponent,
    UpdateComponent,
    ActorUpdateComponent,
    DirectorUpdateComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,FormsModule,
    RouterModule.forRoot(appRoutes),
    

  ],
  providers: [
     ActivationViaAuthenticationGuard,
     LoginService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
