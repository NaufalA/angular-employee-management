import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCreatePage } from './employee-create.page';

describe('EmployeeCreatePage', () => {
  let component: EmployeeCreatePage;
  let fixture: ComponentFixture<EmployeeCreatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCreatePage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
