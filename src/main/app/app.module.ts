import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { App_Config, App_Config_Service } from '../services/appconfig.service';
import { AppComponent } from './app.component';
import { EmployeeComponent } from '../employee/Employee.component';
import {EmployeesListComponent} from "../employee/employees-list/employees-list.component";
import { ContainerComponent } from '../container/container.component';
import { RoomComponent } from '../rooms/room.component';
import { LoginComponent } from '../login/login.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { NotFoundComponent } from '../not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeesListComponent,
    ContainerComponent,
    RoomComponent,
    LoginComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    {
      provide: App_Config_Service,
      useValue: App_Config,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
