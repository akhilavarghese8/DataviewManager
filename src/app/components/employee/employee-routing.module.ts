import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';

const routes: Routes = [

  {
    path: "",
    component: EmployeeComponent,
    children: [
      {
        path: "",
        redirectTo: "list",
        pathMatch: "full"
      },
      {
        path: "list",
        component: EmployeeListComponent,
      },
      {
        path: "add",
        component: EmployeeAddComponent
      },
      {
        path:'**',
        pathMatch:'full',
        component:ErrorPageComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
