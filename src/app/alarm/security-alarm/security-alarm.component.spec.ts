import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityAlarmComponent } from './security-alarm.component';

describe('SecurityAlarmComponent', () => {
  let component: SecurityAlarmComponent;
  let fixture: ComponentFixture<SecurityAlarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityAlarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
