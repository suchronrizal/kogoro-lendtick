import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterLoanTypeComponent } from './master-loan-type.component';

describe('MasterLoanTypeComponent', () => {
  let component: MasterLoanTypeComponent;
  let fixture: ComponentFixture<MasterLoanTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterLoanTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterLoanTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
