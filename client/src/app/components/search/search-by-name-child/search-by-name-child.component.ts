import { Component, OnInit, Input } from '@angular/core';
import { Child } from 'src/app/modules/Child';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ChildrenService } from 'src/app/services/children.service';
import { ChildWithDetails } from 'src/app/modules/child-with-details';


@Component({
  selector: 'app-search-by-name-child',
  templateUrl: './search-by-name-child.component.html',
  styleUrls: ['./search-by-name-child.component.css']
})
export class SearchByNameChildComponent implements OnInit {
  stateCtrl: FormControl = new FormControl();
  filteredStates: Observable<Child[]>;
  @Input() children:ChildWithDetails[];
  newChildren: ChildWithDetails[];
  ngOnInit() {
    this.childrenService.GetAllChildrenWithDetails().subscribe(
      state => {
        this.children = state;
        this.newChildren = this.children;
         console.log(this.newChildren);
         console.log(this.children);
      }
    );

   

  }

  constructor(private childrenService: ChildrenService) {

    // this.filteredStates = this.stateCtrl.valueChanges
    // .pipe(
    //   startWith(''),
    //   map(state => state ? this._filterStates(state) : this.children.slice())
    // );
  }
  searchByIdentityNum(event) {
    this.newChildren = this.children.filter(p => p.IdentityNum.startsWith(event) == true)
  }
  searchByName(event) {
    this.newChildren = this.children.filter(p => p.FirstName.startsWith(event) == true)
  }
  // private _filterStates(value: string): Child[] {
  //  const filterValue = value.toLowerCase();

  //  return this.children.filter(state => state.FirstName.toLowerCase().indexOf(filterValue) === 0);
  // }
}

