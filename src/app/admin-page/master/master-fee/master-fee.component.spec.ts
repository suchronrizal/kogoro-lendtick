import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterFeeComponent } from './master-fee.component';

describe('MasterFeeComponent', () => {
  let component: MasterFeeComponent;
  let fixture: ComponentFixture<MasterFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
