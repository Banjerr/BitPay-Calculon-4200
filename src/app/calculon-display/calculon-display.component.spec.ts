import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculonDisplayComponent } from './calculon-display.component';

describe('CalculonDisplayComponent', () => {
  let component: CalculonDisplayComponent;
  let fixture: ComponentFixture<CalculonDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculonDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculonDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
