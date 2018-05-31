import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MianWorkflowComponent } from './mian-workflow.component';

describe('MianFeedbackComponent', () => {
  let component: MianWorkflowComponent;
  let fixture: ComponentFixture<MianWorkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MianWorkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MianWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
