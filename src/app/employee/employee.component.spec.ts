import { ComponentFixture, TestBed } from '@angular/core/testing';

import { employeeComponent} from './employee.component';

describe('employeeComponent', () => {
  let component: employeeComponent;
  let fixture: ComponentFixture<employeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [employeeComponent]
    });
    fixture = TestBed.createComponent(employeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
