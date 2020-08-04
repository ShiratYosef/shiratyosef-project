import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSubjectComponent } from './delete-subject.component';

describe('DeleteSubjectComponent', () => {
  let component: DeleteSubjectComponent;
  let fixture: ComponentFixture<DeleteSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
