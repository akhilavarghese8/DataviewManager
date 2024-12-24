import { TestBed } from '@angular/core/testing';

import { ApiDataTableService } from './api-data-table.service';

describe('ApiDataTableService', () => {
  let service: ApiDataTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDataTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
