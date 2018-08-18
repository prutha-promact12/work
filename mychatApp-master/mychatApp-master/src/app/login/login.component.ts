import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Service/LoginService';
import { UserLogin } from '../Model/UserLogin';
import { Router } from '@angular/router';
import { HubConnectionService } from '../Service/HubConnectionService';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  updateIndex: number;
  users: any;
  user = new UserLogin();
  password: string;
  constructor(private service: LoginService, private router: Router, private hubservice: HubConnectionService) { }

  onSubmit() {
    this.service.getUser(this.user.name)
      .subscribe(
      (data: UserLogin) => {
        if (!data)
          alert("no such id");
        else {
          if (this.user.password === data.password) {
            this.hubservice.setconectid(this.user.name);
            this.hubservice.setstatus(this.user.name);
            this.router.navigate(['/list', this.user.name]);
          }
          else {
            alert("Password Does not match");
          }
        }
      });
  }

  ngOnInit() {
    this.service.getUsers().subscribe((data: any) => this.users = data);
  }
}
