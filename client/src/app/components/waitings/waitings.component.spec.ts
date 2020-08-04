import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingsComponent } from './waitings.component';

describe('WaitingsComponent', () => {
  let component: WaitingsComponent;
  let fixture: ComponentFixture<WaitingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
