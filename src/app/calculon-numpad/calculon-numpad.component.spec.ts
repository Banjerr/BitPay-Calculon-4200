import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculonNumpadComponent } from './calculon-numpad.component';

describe('CalculonNumpadComponent', () => {
  let component: CalculonNumpadComponent;
  let fixture: ComponentFixture<CalculonNumpadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculonNumpadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculonNumpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
