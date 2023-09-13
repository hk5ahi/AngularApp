import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Employee} from "../../customDataTypes/Employee";

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private endpoint = 'https://6501b693736d26322f5c2b0d.mockapi.io/employee';
  private employees: Employee[] = [];

  constructor(private http: HttpClient) {}

  getUsersData(): Observable<Map<string, string>> {
    return this.http.get<any[]>(`${this.endpoint}/usersData`).pipe(
      map((data: any[]) => {
        const usersDataMap = new Map<string, string>();
        data.forEach(item => {
          usersDataMap.set(item.username, item.role);
        });
        return usersDataMap;
      })
    );
  }

  addEmployee(): Observable<Employee> {
    return this.http.post<Employee>(`${this.endpoint}/employee`, {}).pipe(
      map((data: Employee) => {
        this.employees = [...this.employees, data];
        return data;
      })
    );
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.endpoint}/employee`).pipe(
      map((data: Employee[]) => {
        this.employees = data;
        return data;
      })
    );
  }
}
