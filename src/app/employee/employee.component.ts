import {Component, OnInit} from '@angular/core';
import {Employee} from "../../Employee";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class employeeComponent implements OnInit{
  ngOnInit(): void {
    this.initializeUsers();
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  usersWithRoles:Map<string,string> = new Map<string,string>();
  currentUserIndex: number = 0;
  userName: string = "";
  userRole: string = "";
  currentTime: Date = new Date();
  employees: Employee[] = [];
  disabled: boolean = false;
  TotalEmployees: number = 3;
  receivedData!:Employee;
  private updateTime() {
    this.currentTime = new Date();
  }
  hideEmployees() {

    this.disabled = false;

  }

  receiveFocusRequest(data: Employee)
  {
    console.log(data);
    this.receivedData=data;

  }
  initializeUsers() {
    this.usersWithRoles.set("m.hanan", "Admin");
    this.usersWithRoles.set("m.umer", "User");
    this.usersWithRoles.set("m.usman", "User");
    this.currentUserIndex = 0;

    this.updateUser("m.hanan"); // Initialize with the first user
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


  initializeEmployee() {
  this.disabled = true;
    this.employees = [{

      firstName: "Muhammad",
      lastName: "Hanan",
      age: 25,
      Email: "mohammad@gmail.com",
      Salary: 100
    },
      {
        firstName: "Muhammad",
        lastName: "Umer",
        age: 22,
        Email: "umar@gmail.com",
       Salary: 200
      },
      {
        firstName: "Muhammad",
        lastName: "Usman",
        age: 11,
        Email: "usman@gmail.com",
        Salary: 300
      }
    ];

  }
}
