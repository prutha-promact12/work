import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../Service/LoginService';
import { HubConnection } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';
import { UserLogin, Messages } from '../Model/UserLogin';
import { HubConnectionService } from '../Service/HubConnectionService';
import { MessageService } from '../Service/MessageService';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  notify: string;
  public unread: number;
  senderupdate: UserLogin;
  store: any;
  name: string;
  recevier: string;
  recevierid: any;
  senderid: any;
  private _hubConnection: HubConnection;
  message: string = '';
  messages: string[] = [];
  hismsg: string[] = [];
  dateTimeLocal: any;
  id: any;
  addMessage = new Messages();
  msg: string;
  text: string;
  @Input() sender: string;
  constructor(private route: ActivatedRoute, private _dataservice: LoginService, private hubservice: HubConnectionService, private _msgservice: MessageService) {
    hubservice.messages = [];
  }

  
  onSubmit() {
    this.dateTimeLocal = new Date().toLocaleString();
    this.sender = this._dataservice.getsender();
    this._dataservice.getUser(this.recevier)
      .subscribe((data: any) => {
        this.recevierid = data.connectionID,
          this._dataservice.getUser(this.sender)
          .subscribe((data1: any) => {
            this.senderid = data1.connectionID,
              this.msg = this.message + ":" + this.dateTimeLocal;
            this.messages= this.hubservice.senddirectmsg(this.recevierid, this.senderid, this.msg, this.sender);
            })
      });
    this.addMessage.message = this.message;
    this.addMessage.sender = this.sender;
    this.addMessage.recevier = this.recevier;
    this.addMessage.time = this.dateTimeLocal;
    this.addMessage.IsRead = false;
    this._msgservice.addMsg(this.addMessage).subscribe((data: any) => console.log(data));
  }

  ngOnInit() {
    console.log(this.dateTimeLocal);
    this.sender = this._dataservice.getsender();
    this.name = this.route.snapshot.params['name'];
    this._dataservice.setreceiver(this.name);
    this.recevier = this._dataservice.getrecevier();
    console.log("sender:" + this.sender);
    console.log("recevier:" + this.recevier);
    this._msgservice.getMsgs().subscribe((data: any) =>
    {
      for (let msg of data)
      {
      if (
        msg.recevier === this.recevier
        && msg.sender === this.sender     
        || msg.recevier === this.sender &&
        msg.sender === this.recevier)
      {
        var text = msg.sender + ":" + msg.message + ":" + msg.time;
        this.hismsg.push(text);
        msg.isRead = true;
        this._msgservice.update(msg).subscribe((data: any) => console.log(data));
      }
      }
    });

  
  }
}
