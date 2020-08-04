import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenPageComponent } from './children-page.component';

describe('ChildrenPageComponent', () => {
  let component: ChildrenPageComponent;
  let fixture: ComponentFixture<ChildrenPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
