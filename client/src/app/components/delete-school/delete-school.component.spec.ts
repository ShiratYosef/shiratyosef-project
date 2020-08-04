import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSchoolComponent } from './delete-school.component';

describe('DeleteSchoolComponent', () => {
  let component: DeleteSchoolComponent;
  let fixture: ComponentFixture<DeleteSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
