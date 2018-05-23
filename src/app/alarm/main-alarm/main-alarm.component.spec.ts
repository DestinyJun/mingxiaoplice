import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAlarmComponent } from './main-alarm.component';

describe('MainAlarmComponent', () => {
  let component: MainAlarmComponent;
  let fixture: ComponentFixture<MainAlarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAlarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
