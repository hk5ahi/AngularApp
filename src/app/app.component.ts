import {AfterViewInit, Component, Inject, OnInit, Optional, ViewChild, ViewContainerRef} from '@angular/core';

import {LoggerService} from "./Services/logger.service";
import {LocalStorageToken} from "./LocalStorage/LocalStorage";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit,OnInit {
  title = 'Demo Angular Application';
  CurrentTime: Date = new Date();


  @ViewChild('employeeComponent',{read:ViewContainerRef}) employeeComponent!: ViewContainerRef;
  constructor(@Optional()private loggerService:LoggerService,@Inject(LocalStorageToken) private localStorage:Storage) {
    // this.loggerService.showLog("AppComponent constructor");
  }

  ngAfterViewInit(): void {
    // const componentFactory = this.employeeComponent.createComponent(employeeComponent);
    // componentFactory.instance.TotalEmployees = 33;
  }

  ngOnInit(): void {

    this.localStorage.setItem("TestName","TestValue");
  }
}

