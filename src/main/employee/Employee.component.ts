import { Component, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Employee } from '../customDataTypes/Employee';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './Employee.component.html',
  styleUrls: ['./Employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  @ViewChild(EmployeesListComponent) employeesListComponent!: EmployeesListComponent;
  @ViewChildren(EmployeesListComponent) employeesListComponents!: QueryList<EmployeesListComponent>;

  constructor(@SkipSelf() private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.initializeUsers();
    this.initializeEmployee();
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  usersWithRoles: Map<string, string> = new Map<string, string>();
  currentUserIndex: number = 0;
  userName: string = '';
  userRole: string = '';
  currentTime: Date = new Date();
  employees: Employee[] = [];
  disabled: boolean = false;
  TotalEmployees: number = 3;
  receivedData!: Employee;
  contentVariable = 'Total Employees:';

  private updateTime() {
    this.currentTime = new Date();
  }

  hideEmployees() {
    this.disabled = false;
  }

  receiveFocusRequest(data: Employee) {
    this.receivedData = data;
  }

  initializeUsers() {
    this.usersWithRoles = this.employeeService.getUsersData();
    this.currentUserIndex = 0;
    this.updateUser('m.hanan'); // Initialize with the first user
  }

  changeUserAndRole() {
    const usersArray = Array.from(this.usersWithRoles.keys());
    this.currentUserIndex = (this.currentUserIndex + 1) % usersArray.length;
    const userName = usersArray[this.currentUserIndex];
    this.updateUser(userName); // Pass the current userName
  }

  private updateUser(userName: string) {
    const userRole = this.usersWithRoles.get(userName);
    if (userRole) {
      this.userName = userName;
      this.userRole = userRole;
    }
  }

  addEmployee() {
    let employee: Employee = {
      firstName: 'Muhammad',
      lastName: 'Saim',
      age: 25,
      Email: 'saim@gmail.com',
      Salary: 10,
    };
    this.TotalEmployees++;
    this.employees = [...this.employees, employee];
  }

  showEmployees() {
    this.disabled = true;
  }

  initializeEmployee() {
    this.employees = this.employeeService.getEmployees();
  }
}
