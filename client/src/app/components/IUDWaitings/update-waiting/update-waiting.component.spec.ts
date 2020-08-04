import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWaitingComponent } from './update-waiting.component';

describe('UpdateWaitingComponent', () => {
  let component: UpdateWaitingComponent;
  let fixture: ComponentFixture<UpdateWaitingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWaitingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
