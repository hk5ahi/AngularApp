import {AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';

import {employeeComponent} from "./employee/employee.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Demo Angular Application';
  userRole: string = "User";

  @ViewChild('employeeComponent',{read:ViewContainerRef}) employeeComponent!: ViewContainerRef;


  ngAfterViewInit(): void {
    const componentFactory = this.employeeComponent.createComponent(employeeComponent);
    // componentFactory.instance.TotalEmployees = 33;
  }
}

