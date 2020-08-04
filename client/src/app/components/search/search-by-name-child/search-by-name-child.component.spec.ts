import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByNameChildComponent } from './search-by-name-child.component';

describe('SearchByNameChildComponent', () => {
  let component: SearchByNameChildComponent;
  let fixture: ComponentFixture<SearchByNameChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByNameChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByNameChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
