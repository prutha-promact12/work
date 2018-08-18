import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../Model/UserLogin';
import { LoginService } from '../Service/LoginService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = new UserLogin();
  confrim: string
  users: UserLogin[];
  constructor(private service: LoginService, private router: Router) { }
  onSubmit() {

    this.service.getUser(this.user.name)
      .subscribe(

        (data: UserLogin) => {
          if (data)
            alert("id already exits Plz use another name");
          else {
            if (this.confrim === this.user.password) {
              this.service.addUser(this.user).
                subscribe((data: any) => this.users.push(data))
              this.router.navigate(['/login']);
            }
            else
              alert("Password Does not match");
          }
        });
  }
  ngOnInit() {
  }

}
