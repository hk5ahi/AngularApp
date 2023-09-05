import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Employee} from "../../../Employee";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit{

  @Input() employees: Employee[] = [];
  @Input() userRole: string = "";
  @Input() disabled: boolean = false;
  @Output() requestEvent: EventEmitter<Employee> = new EventEmitter<Employee>();
  @Input() selectedEmployee!: Employee;
  ngOnInit(): void {
  }

  requestFocusOnEmployee(employee: Employee) {
    console.log("requestFocusOnEmployee");
    this.requestEvent.emit(employee);


  }



}
