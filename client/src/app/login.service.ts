export class LoginService {
   user : string;
   password:string;
  isLoggedIn()
  {
    this.user = window.prompt(' Please enter your userid');
    this.password = window.prompt(' Please enter your Password');
    if (this.user === '123456'&&this.password === '123456'){
        window.alert('Login Successful!')
  		return true;
  	}
  	else {
  	    window.alert('Login Unsuccessful!')
      return false;
    }
      }

  }
