import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from './../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private message: string;
  constructor(private app:AppComponent, private router: Router) { }

  ngOnInit() {}

  private login(e) {

    this.message = '';

    let login = e['login'].value
    let pass = e['password'].value
    let t = this;

    let accounts = [];
    accounts = JSON.parse(localStorage.getItem('accounts'));

    console.log(accounts);
    
    let exist: boolean = false;
    if (accounts) {
      for (let i = 0; accounts.length > i; i++) {
        if (accounts[i].login == login && accounts[i].pass == pass) {
          exist = true;  
        }
      }
    }

    if(exist){
      localStorage.setItem('user',login);
      this.app.login();
      this.router.navigate(['/start']);
    }
    else
    {
      this.message = 'Podany login lub hasł jest błędne...';
    }

    return false;
  }

}
