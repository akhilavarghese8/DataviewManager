import { TestBed } from '@angular/core/testing';

import { ApiDatatableService } from './api-datatable.service';

describe('ApiDatatableService', () => {
  let service: ApiDatatableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDatatableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
