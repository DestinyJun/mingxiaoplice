import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FromFeedbackComponent} from './from-feedback.component';


describe('FromFeedbackComponent', () => {
  let component: FromFeedbackComponent;
  let fixture: ComponentFixture<FromFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
