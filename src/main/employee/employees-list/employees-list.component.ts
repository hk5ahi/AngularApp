import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../../customDataTypes/Employee';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesListComponent {
  @Input() employees: Employee[] = [];
  @Input() userRole: string = '';
  @Input() disabled: boolean = false;
  @Output() requestEvent = new EventEmitter<Employee>();
  @Input() selectedEmployee!: Employee;

  requestFocusOnEmployee(employee: Employee) {
    this.requestEvent.emit(employee);
  }

  isEmployeeSelected(employee: Employee): boolean {
    return this.selectedEmployee === employee;
  }
}
