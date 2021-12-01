import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterCompanyProductComponent } from './master-company-product.component';

describe('MasterCompanyProductComponent', () => {
  let component: MasterCompanyProductComponent;
  let fixture: ComponentFixture<MasterCompanyProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterCompanyProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterCompanyProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
