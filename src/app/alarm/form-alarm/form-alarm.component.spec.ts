import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlarmComponent } from './form-dispute.component';

describe('FormAlarmComponent', () => {
  let component: FormAlarmComponent;
  let fixture: ComponentFixture<FormAlarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAlarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
