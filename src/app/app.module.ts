import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { employeeComponent } from './employee/employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeesListComponent } from './employee/employees-list/employees-list.component';
import { ContainerComponent } from './container/container.component';
import {App_Config, App_Config_Service} from "./AppConfig/appconfig.service";
import { HttpClientModule} from "@angular/common/http";
import {RoomComponent} from "./user/room.component";






@NgModule({
  declarations: [
    AppComponent,
    employeeComponent,
    EmployeesListComponent,
    ContainerComponent,
    RoomComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: App_Config_Service,
      useValue: App_Config,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
