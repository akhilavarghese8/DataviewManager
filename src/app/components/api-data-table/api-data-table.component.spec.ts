import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIDataTableComponent } from './api-data-table.component';

describe('APIDataTableComponent', () => {
  let component: APIDataTableComponent;
  let fixture: ComponentFixture<APIDataTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [APIDataTableComponent]
    });
    fixture = TestBed.createComponent(APIDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
