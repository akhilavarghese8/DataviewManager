import { TestBed } from '@angular/core/testing';

import { EmployeeservicesService } from './employeeservices.service';

describe('EmployeeservicesService', () => {
  let service: EmployeeservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
