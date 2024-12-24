import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TruncatePipe } from 'src/app/pipes/truncate.pipe';
import { TooltipModule } from 'primeng/tooltip';
import { PaginatorModule } from 'primeng/paginator';



@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeAddComponent,
    EmployeeListComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule ,
    ReactiveFormsModule,
    TableModule,
    TooltipModule,
    PaginatorModule
  ]
})
export class EmployeeModule { }
