import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private message: string;
  constructor() { }

  ngOnInit() {
  }

  private register(e) {

    this.message = '';

    let login = e['login'].value
    let pass = e['password'].value
    let repass = e['repassword'].value
    let t = this;
    if (pass == repass) {
      if (pass.length >= 8) {
        let accounts = [];
        accounts = JSON.parse(localStorage.getItem('accounts'));

        if(accounts == null) {
          accounts = [];
        }

        let exist: boolean = false;
        if (accounts) {
          for (let i = 0; accounts.length > i; i++) {
            if (accounts[i].login == login) {
              t.message = 'Podany login już istnieje w bazie...'
              exist = true;
            }
          }
        }

        if (exist == false) {
          let json = { 'login': login, 'pass': pass };
          let obj = JSON.parse(JSON.stringify(json));
          accounts.push(obj);
          localStorage.setItem('accounts', JSON.stringify(accounts));

          this.message = 'Użytkownik został poprawnie zarejestrowany możesz się aktualnie zalogować do serwisu...';
        }
      }
      else {
        this.message = 'Wymagana długość hasła musi mieć 8 znaków..';
       }
    }
    else {
      this.message = 'Podane hasła nie sa takie same...';
    }

    return false;
  }

}
