import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiDataTableService } from 'src/app/services/api-data-table.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-api-data-table-list',
  templateUrl: './api-data-table-list.component.html',
  styleUrls: ['./api-data-table-list.component.scss'],
})
export class APIDataTableListComponent implements OnInit, OnDestroy {
  apiData: any[] = [];
  totalRecords: number = 0;
  loading: boolean = true;
  globalFilter: FormControl = new FormControl('');  // Reactive form control for global filter
  columnFilters: any = {};
  apiSubscription = new Subscription();

  constructor(private ApiDatatableService: ApiDataTableService) {}

  ngOnInit(): void {

    this.globalFilter.valueChanges.pipe(debounceTime(300)).subscribe(() => {
      this.loadData({ first: 0, rows: 10 });
    });

    this.loadData({ first: 0, rows: 10 });
  }

  loadData(event: any): void {
    const start = event.first;
    const limit = event.rows;

    this.loading = true;

    this.apiSubscription.add(
      this.ApiDatatableService.fetchData(start, limit).subscribe(
        (data: any[]) => {

          let filteredData = this.applyFilters(data);
          this.apiData = filteredData;
          this.totalRecords = filteredData.length;
          this.loading = false;
        }
      )
    );
  }

  applyFilters(data: any[]): any[] {
    let filteredData = data;

    if (this.globalFilter.value) {
      filteredData = filteredData.filter((item) =>
        Object.keys(item).some((key) =>
          item[key]
            .toString()
            .toLowerCase()
            .includes(this.globalFilter.value.toLowerCase())
        )
      );
    }


    for (const key in this.columnFilters) {
      if (this.columnFilters[key]) {
        filteredData = filteredData.filter((item) =>
          item[key]
            .toString()
            .toLowerCase()
            .includes(this.columnFilters[key].toLowerCase())
        );
      }
    }

    return filteredData;
  }

  onColumnFilter(event: any, column: string): void {
    this.columnFilters[column] = event.target.value;
    this.loadData({ first: 0, rows: 10 });
  }


  onGlobalFilter(event: any): void {
    this.loadData({ first: 0, rows: 10 });
  }

  ngOnDestroy(): void {
    this.apiSubscription.unsubscribe();
  }
}
