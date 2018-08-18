import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLogin, Messages } from '../Model/UserLogin';
@Injectable()
export class MessageService {

  private accessPointUrl: string = '/api/message';

  constructor(private http: HttpClient) {
  }

  addMsg(msg: Messages) {
    return this.http.post(this.accessPointUrl, msg);
  }
  getMsgs() {
    return this.http.get(this.accessPointUrl);
  }
  update(msg: Messages) {
    return this.http.put(this.accessPointUrl + '/' + msg.id, msg);
  }
}
