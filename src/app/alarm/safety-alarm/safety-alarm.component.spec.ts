import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyAlarmComponent } from './safety-alarm.component';

describe('SafetyAlarmComponent', () => {
  let component: SafetyAlarmComponent;
  let fixture: ComponentFixture<SafetyAlarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyAlarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
