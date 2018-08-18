import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { Login } from './ChatApp.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Maincontent } from './ChatApppage.component';
import { AppComponent } from './app.component';
import { DataService } from './ChatApp.service';


const AppRoutes: Routes = [
  { path: 'ChatApp', component: Login  }, 
  { path: 'ChatApppage', component: Maincontent },
  { path: '',redirectTo:'ChatApp',pathMatch: "full" },
];

@NgModule({
 declarations: [
   Login,
   AppComponent,
   Maincontent    
 ],
 imports: [
   BrowserModule,
   FormsModule,
   HttpClientModule,
   RouterModule.forRoot(AppRoutes)
 ],
 providers: [DataService],
 bootstrap: [Login,Maincontent,AppComponent]
})
export class AppModule { }