import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDisputeComponent } from './form-dispute.component';

describe('FormDisputeComponent', () => {
  let component: FormDisputeComponent;
  let fixture: ComponentFixture<FormDisputeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDisputeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDisputeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
