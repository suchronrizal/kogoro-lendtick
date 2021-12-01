import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiketPesawatComponent } from './tiket-pesawat.component';

describe('TiketPesawatComponent', () => {
  let component: TiketPesawatComponent;
  let fixture: ComponentFixture<TiketPesawatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiketPesawatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiketPesawatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
