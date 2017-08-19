import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from './login.service';
 
@Injectable()
export class ActivationViaAuthenticationGuard implements CanActivate {
 
  constructor(private loginService: LoginService) {}
 
  canActivate() 
  {
    return this.loginService.isLoggedIn();
  }
}