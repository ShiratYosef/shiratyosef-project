import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWaitingComponent } from './delete-waiting.component';

describe('DeleteWaitingComponent', () => {
  let component: DeleteWaitingComponent;
  let fixture: ComponentFixture<DeleteWaitingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteWaitingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteWaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
