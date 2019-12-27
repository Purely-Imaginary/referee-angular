import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private buttonText: string;
  private errorText: string;
  constructor(
    private cookieService: CookieService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.buttonText = "Login"
  }

  login(username: string, password: string) {
    const Http = new XMLHttpRequest();
    const url=`http://localhost:3000/user/login/${username}/${password}`;
    this.buttonText = "Logging in...";
    const self = this;
    Http.open("GET", url);
    Http.onload = function() {
      const response = Http.response;
      if (response === 'Not found.') {
        self.errorText = 'Wrong credentials.';
        alert('error');
      } else {
        self.cookieService.set('jwt', response);
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(response);
        self.router.navigate(['/player/' + decodedToken.user.playerId]);
      }
    };
    Http.send();
  }

}
