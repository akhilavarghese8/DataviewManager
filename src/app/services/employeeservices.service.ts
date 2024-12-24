import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeservicesService {

  constructor() { }


  private storageKey = 'employees';



  // Fetch employees from localStorage
  getEmployees(): any[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  // Add a new employee to localStorage
  addEmployee(employee: any): void {
    const employees = this.getEmployees();
    employees.push(employee);
    localStorage.setItem(this.storageKey, JSON.stringify(employees));
  }

  // Delete an employee from localStorage
  deleteEmployee(index: number): void {
    const employees = this.getEmployees();
    employees.splice(index, 1);
    localStorage.setItem(this.storageKey, JSON.stringify(employees));
  }
}
