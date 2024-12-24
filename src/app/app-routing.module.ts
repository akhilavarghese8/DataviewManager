
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { CommonLayoutComponent } from './components/common-layout/common-layout.component';
import { authGuard } from './auth.guard';
const routes: Routes = [

 {
    path: '',
    redirectTo: 'auth/login',  // Redirect to login on initial load
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./components/auth/auth/auth.module').then(m => m.AuthModule),  // Lazy load AuthModule
  },
  {
    path: '',
    component: CommonLayoutComponent,
    children: [
      {
        path: 'employee',
        loadChildren: () =>
          import('./components/employee/employee.module').then(
            m => m.EmployeeModule
          ),
          canActivate: [authGuard]
      },
      {
        path: 'apidatatable',
        loadChildren: () =>
          import('./components/api-data-table/api-data-table.module').then(
            m => m.APIDataTableModule
          ),
          canActivate: [authGuard]
      },
      {
        path: '**',
        pathMatch: 'full',
        component: ErrorPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

