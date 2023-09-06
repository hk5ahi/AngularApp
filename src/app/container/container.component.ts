import {AfterContentInit, Component, ContentChild} from '@angular/core';

import {employeeComponent} from "../employee/employee.component";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements AfterContentInit{


    @ContentChild(employeeComponent) employeeComponent!: employeeComponent;
    ngAfterContentInit(): void {

        console.log(JSON.stringify(this.employeeComponent));

    }
}
