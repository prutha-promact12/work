import {Component , OnInit, ChangeDetectorRef } from '@angular/core';
import { Users } from '../models/ChatApp.model';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from './ChatApp.service';
import { Myinterceptor } from './chatapp.interceptor';
import { HttpRequest } from '@angular/common/http/src/request';

@Component({
   selector:'app-root',
    templateUrl: './ChatApppage.html',
    styleUrls: ['./ChatApppage.css']   
   })

export class Maincontent implements OnInit {
    model : any ;
    users: object;
    msgs: object;
    chatusername:  string;
    usermsg : string;
    chatuserid: String;
    currentuser: String;
     

    constructor(private http: HttpClient,private route: ActivatedRoute,private _router: Router,private dataservice:DataService,private _changeDetector: ChangeDetectorRef)
    {
       console.log("The user id is " + dataservice.userId());
       console.log("The token for the user is " + dataservice.userToken());           
    }

    ngOnInit(): void
    {
    this.model = new Users();
    const requestHeaders = new HttpHeaders().set('Content-Type','text').append('Authorization',this.dataservice.userToken());              
    this.http.get('https://chat.promactinfo.com/api/user',{
           headers: requestHeaders
        })
       .toPromise()
       .then(
             res => {
               console.log(res);  
               this.users = res;             
             },
             err => {
               console.log("Error occured");
             }
           );
           this.currentuser = this.dataservice.userName();
           
    }  


    loadmsg(Uid,Uname): void {
        const requestHeaders1 = new HttpHeaders().set('Content-Type','text').append('Authorization',this.dataservice.userToken()).set('Content-Type','text').append('Content-Type','application/json');                       
        this.http.get('https://chat.promactinfo.com/api/chat/'+Uid,{
            headers: requestHeaders1
            })
        .toPromise()
        .then(
                res => {
                console.log(res);  
                this.msgs = res; 
                this.chatusername = Uname; 
                this.chatuserid = Uid;       
                },
                err => {
                console.log("Error occured");
                }
            );            
        }

    sendmsg(): void {        
        console.log(this.usermsg);
        console.log(this.chatuserid);
        const requestHeaders2 = new HttpHeaders().append('Authorization',this.dataservice.userToken()).append('Content-Type','application/json');               
        var data = {
            message: this.usermsg ,
            toUserId: this.chatuserid  
        };
        console.log(data);
        console.log(JSON.stringify(data));
        const req = this.http.post('https://chat.promactinfo.com/api/chat',JSON.stringify(data),
        {
            headers: requestHeaders2
            })
           .toPromise()
           .then(
                 res => {
                   console.log(res);  
                    this.loadmsg(this.chatuserid,this.chatusername);
                    this._changeDetector.detectChanges(); 
                 },
                 err => {
                   console.log("Error occured");
                 }                 
               );
               
        }

    getname(checkid)
    {
    if(checkid == this.chatuserid)
        {
            return this.chatusername
        }
    else
        {    
            return this.currentuser
        }
    }

    
}