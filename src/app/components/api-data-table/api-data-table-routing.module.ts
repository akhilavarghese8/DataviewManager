import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APIDataTableListComponent } from './components/api-data-table-list/api-data-table-list.component';
import { ErrorPageComponent } from '../error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    component: APIDataTableListComponent,
    children: [
      {
        path: "",
        redirectTo: "api-data-table-list",
        pathMatch: "full"
      },
      {
        path: "list",
        component: APIDataTableListComponent,
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
export class APIDataTableRoutingModule { }
