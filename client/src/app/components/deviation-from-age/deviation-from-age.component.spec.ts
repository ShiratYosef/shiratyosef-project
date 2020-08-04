import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviationFromAgeComponent } from './deviation-from-age.component';

describe('DeviationFromAgeComponent', () => {
  let component: DeviationFromAgeComponent;
  let fixture: ComponentFixture<DeviationFromAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviationFromAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviationFromAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
