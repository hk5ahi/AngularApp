import {Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges} from '@angular/core';
import {Employee} from "../../../Employee";
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesListComponent implements OnChanges{

  @Input() employees: Employee[] = [];
  @Input() userRole: string = "";
  @Input() disabled: boolean = false;
  @Output() requestEvent= new EventEmitter<Employee>();
  @Input() selectedEmployee!: Employee;


  requestFocusOnEmployee(employee: Employee) {

    this.requestEvent.emit(employee);

  }
    isEmployeeSelected(employee: Employee): boolean {
        return this.selectedEmployee === employee;
    }

  ngOnChanges(changes: SimpleChanges): void {

   console.log(changes);
  }


  }

