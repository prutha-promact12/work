import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatListComponent } from './chat-list/chat-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { FormsModule } from '@angular/forms';
import { HubConnectionService } from './Service/HubConnectionService';
import { MessageService } from './Service/MessageService';

const appRoutes: Routes = [{
  path: 'list/:name',
  component: ChatListComponent,
  children: [
    { path: 'room/:name', component: ChatroomComponent }
  ]}];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    ChatListComponent,
    ChatroomComponent],

  providers: [HubConnectionService,
    MessageService]
})
export class RoutingModuleModule { }
