import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomComponent } from '../rooms/room.component';
import { EmployeeComponent } from './Employee.component';

const employeeRoutes: Routes = [
  {
    path: '',
    redirectTo: 'employee',
    pathMatch: 'full',
  },
  { path: 'employee', component: EmployeeComponent },
  { path: 'room', component: RoomComponent },
];

@NgModule({
  imports: [RouterModule.forChild(employeeRoutes)],
  exports: [RouterModule],
})
export class EmployeeModule {}
