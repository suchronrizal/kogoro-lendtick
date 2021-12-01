import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroloanComponent } from './microloan.component';

describe('MicroloanComponent', () => {
  let component: MicroloanComponent;
  let fixture: ComponentFixture<MicroloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
