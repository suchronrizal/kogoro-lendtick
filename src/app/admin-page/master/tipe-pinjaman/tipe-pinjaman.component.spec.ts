import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipePinjamanComponent } from './tipe-pinjaman.component';

describe('TipePinjamanComponent', () => {
  let component: TipePinjamanComponent;
  let fixture: ComponentFixture<TipePinjamanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipePinjamanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipePinjamanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
