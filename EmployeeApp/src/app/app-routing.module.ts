import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AllEmployeesComponent} from './all-employees/all-employees.component';
import {GetSingleEmployeeComponent} from './get-single-employee/get-single-employee.component';


const routes: Routes = [
  { path: 'employees', component: AllEmployeesComponent},
  { path: 'details', component: GetSingleEmployeeComponent}
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }
