import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeservicesService } from 'src/app/services/employeeservices.service';
import { TableLazyLoadEvent } from 'primeng/table';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];
  filteredEmployees: any[] = [];
  paginatedEmployees: any[] = [];
  rowsPerPage: number = 15;
  totalEmployees: number = 0;
  lazyLoadEventObj!: TableLazyLoadEvent;

  constructor(
    private employeeService: EmployeeservicesService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  /**
   * Load all employees from the service
   */
  loadEmployees(): void {
    this.employees = this.employeeService.getEmployees();
    this.filteredEmployees = [...this.employees];
    this.totalEmployees = this.filteredEmployees.length;
    console.log('Total Employees:', this.totalEmployees);
  }

  /**
   * Handles lazy loading of data for pagination
   */
  lazyLoad(event: TableLazyLoadEvent): void {
    const first = event.first ?? 0;
    const rows = event.rows ?? this.rowsPerPage;

    this.lazyLoadEventObj = event;

    this.paginatedEmployees = this.filteredEmployees.slice(first, first + rows);
    console.log('Paginated Employees:', this.paginatedEmployees);

    // Trigger change detection for UI update
    this.cdr.detectChanges();
  }

  /**
   * Deletes an employee and reloads the data
   */
  deleteEmployee(index: number): void {
    const globalIndex = (this.lazyLoadEventObj?.first ?? 0) + index;

    if (globalIndex > -1 && globalIndex < this.filteredEmployees.length) {
      this.employeeService.deleteEmployee(globalIndex);
      this.loadEmployees(); // Refresh full data
      this.totalEmployees = this.filteredEmployees.length;

      // Reload the current page
      if (this.lazyLoadEventObj) {
        this.lazyLoad(this.lazyLoadEventObj);
      }
    }
  }

  /**
   * Filters employees based on search input
   */
  filterEmployees(event: any): void {
    const searchValue = event.target?.value?.toLowerCase().trim();

    if (searchValue && searchValue.length >= 3) {
      this.filteredEmployees = this.employees.filter((employee) =>
        Object.values(employee).some(
          (value) => value && String(value).toLowerCase().includes(searchValue)
        )
      );
    } else {
      // Reset to full list if search value is empty or less than 3 characters
      this.filteredEmployees = [...this.employees];
    }

    this.totalEmployees = this.filteredEmployees.length; // Update total for pagination

    // Reset pagination to the first page after filtering
    this.lazyLoad({ first: 0, rows: this.rowsPerPage });
  }

  /**
   * Navigates to the Add Employee page
   */
  addEmployee(): void {
    this.router.navigate(['employee/add']);
  }
}
