// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { APIDataTableRoutingModule } from './api-data-table-routing.module';
// import { APIDataTableListComponent } from './components/api-data-table-list/api-data-table-list.component';


// @NgModule({
//   declarations: [
//     APIDataTableListComponent
//   ],
//   imports: [
//     CommonModule,
//     APIDataTableRoutingModule
//   ]
// })
// export class APIDataTableModule { }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { APIDataTableRoutingModule } from './api-data-table-routing.module';
import { APIDataTableListComponent } from './components/api-data-table-list/api-data-table-list.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiDatatableService } from 'src/service/api-datatable/api-datatable.service';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  declarations: [
    APIDataTableListComponent
  ],
  imports: [
    CommonModule,
    APIDataTableRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    PaginatorModule,
    FormsModule,
    SkeletonModule,
    ReactiveFormsModule
  ],
  providers: [ApiDatatableService],
})
export class APIDataTableModule { }
