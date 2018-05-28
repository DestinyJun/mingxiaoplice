import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromWorkflowComponent } from './from-workflow.component';

describe('FromWorkflowComponent', () => {
  let component: FromWorkflowComponent;
  let fixture: ComponentFixture<FromWorkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromWorkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
