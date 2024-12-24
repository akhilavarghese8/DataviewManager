import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIDataTableListComponent } from './api-data-table-list.component';

describe('APIDataTableListComponent', () => {
  let component: APIDataTableListComponent;
  let fixture: ComponentFixture<APIDataTableListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [APIDataTableListComponent]
    });
    fixture = TestBed.createComponent(APIDataTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
