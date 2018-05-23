import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenalAlarmComponent } from './penal-alarm.component';

describe('PenalAlarmComponent', () => {
  let component: PenalAlarmComponent;
  let fixture: ComponentFixture<PenalAlarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenalAlarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenalAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
