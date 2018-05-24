import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CluesAlarmComponent } from './clues-alarm.component';

describe('CluesAlarmComponent', () => {
  let component: CluesAlarmComponent;
  let fixture: ComponentFixture<CluesAlarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CluesAlarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CluesAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
