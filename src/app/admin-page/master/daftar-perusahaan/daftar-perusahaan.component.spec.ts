import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarPerusahaanComponent } from './daftar-perusahaan.component';

describe('DaftarPerusahaanComponent', () => {
  let component: DaftarPerusahaanComponent;
  let fixture: ComponentFixture<DaftarPerusahaanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarPerusahaanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarPerusahaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
