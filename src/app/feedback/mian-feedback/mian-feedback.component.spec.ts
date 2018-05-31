import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MianFeedbackComponent} from './mian-feedback.component';


describe('MianFeedbackComponent', () => {
  let component: MianFeedbackComponent;
  let fixture: ComponentFixture<MianFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MianFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MianFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
