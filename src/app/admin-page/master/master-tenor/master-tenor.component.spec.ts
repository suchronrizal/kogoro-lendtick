import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterTenorComponent } from './master-tenor.component';

describe('MasterTenorComponent', () => {
  let component: MasterTenorComponent;
  let fixture: ComponentFixture<MasterTenorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterTenorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterTenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
