import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddPage } from './employee-add.page';

describe('EmployeeAddPage', () => {
  let component: EmployeeAddPage;
  let fixture: ComponentFixture<EmployeeAddPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAddPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
