import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDisputeComponent } from './main-dispute.component';

describe('MainDisputeComponent', () => {
  let component: MainDisputeComponent;
  let fixture: ComponentFixture<MainDisputeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDisputeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDisputeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
