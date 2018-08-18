import { Component, OnInit } from '@angular/core';
import { HubConnection } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';
import { Router, NavigationEnd } from '@angular/router';
import { LoginService } from './Service/LoginService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _router: Router, private service: LoginService) {
  }

  logout() {
    var sender = this.service.getsender();
    this.service.getUser(sender)
      .subscribe((data: any) => {
        data.isConnect = "0";
        this.service.update(data).subscribe((data1: any) => console.log(data1));
        this._router.navigate(['/home']);
      });
  }

  ngOnInit() {

    this._router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this._router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this._router.navigated = false;
        window.scrollTo(0, 0);
      }
    });
  }
}
