import {Component , OnInit } from '@angular/core';
import { Users } from '../models/ChatApp.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from './ChatApp.service';
import { Myinterceptor } from './chatapp.interceptor';

@Component({
  selector:'app-root',
  templateUrl: './ChatApp.html',
  styleUrls:['./ChatApp.css']  
})

export class Login implements OnInit {
    model : any ;
    constructor(private http: HttpClient, private _router:Router,private dataservice: DataService){
    }

    ngOnInit(): void
    {
    this.model = new Users();
    }

    senddata(): void 
    {
        const req = this.http.post('https://chat.promactinfo.com/api/user/login', {
            Name: this.model.username,            
          })
            .toPromise()
            .then(
              res => {
                console.log(res);
                this.dataservice.myData(res);
                this._router.navigate(['/ChatApppage']);
              },
              err => {
                console.log("Error occured 101");
              }
            );             
   }
}