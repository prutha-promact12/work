import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }
    id: string;
    token: string;
    username: string;

  myData(userdata) {
    this.id = userdata.id;
    this.username = userdata.name;
    this.token = userdata.token;
  }
   userId(){
       return this.id;
   }

   userToken(){
       return this.token;
   }
   userName(){
    return this.username;
   }
}