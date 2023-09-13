import {Component, OnInit, ViewChild} from '@angular/core';
import { Employee } from '../customDataTypes/Employee';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './Employee.component.html',
  styleUrls: ['./Employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  @ViewChild(EmployeesListComponent) employeesListComponent!: EmployeesListComponent;
  currentUserIndex = 0;
  userName = '';
  userRole = '';
  currentTime = new Date();
  employees: Employee[] = [];
  disabled = false;
  totalEmployees = 3;
  receivedData!: Employee;
  contentVariable = 'Total Employees:';

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.initializeUsers();
    this.initializeEmployee();
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

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
    this.employeeService.getUsersData().subscribe((data) => {
      this.usersWithRoles = data;
      this.currentUserIndex = 0;
      this.updateUser('m.hanan'); // Initialize with the first user
    });
  }

  changeUserAndRole() {
    this.employeeService.getUsersData().subscribe((data) => {
      this.usersWithRoles = data;
      const usersArray = Array.from(this.usersWithRoles.keys());
      this.currentUserIndex = (this.currentUserIndex + 1) % usersArray.length;
      const userName = usersArray[this.currentUserIndex];
      this.updateUser(userName); // Pass the current userName
    });
  }

  usersWithRoles: Map<string, string> = new Map<string, string>();

  private updateUser(userName: string) {
    const userRole = this.usersWithRoles.get(userName);
    if (userRole) {
      this.userName = userName;
      this.userRole = userRole;
    }
  }

  addEmployee() {
    this.totalEmployees++;
    this.employeeService.addEmployee().subscribe((data) => {
      this.employees = [...this.employees, data];
    });
  }

  showEmployees() {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
    this.disabled = true;
  }

  initializeEmployee() {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }
}
