import {Inject, Injectable} from '@angular/core';
import {Employee} from "../../../Employee";
import {App_Config_Service} from "../../AppConfig/appconfig.service";
import {AppConfig} from "../../AppConfig/appconfig.interface";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class EmployeeService{

  usersData:Map<string,string> = new Map<string,string>();
  employees: Employee[] =[{

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
  //Value Provider
  constructor(@Inject(App_Config_Service) private config: AppConfig) {
    // console.log(this.config.apiEndpoint)
  }


  getUsersData():Map<string,string>{
    this.usersData.set("m.hanan", "Admin");
    this.usersData.set("m.umer", "User");
    this.usersData.set("m.usman", "User");

    return this.usersData;
  }

  getEmployees():Employee[]{
    return this.employees;
  }


}
