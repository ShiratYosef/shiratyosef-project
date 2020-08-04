import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Child } from 'src/app/modules/Child';
import {Input} from '@angular/core';
import { from } from 'rxjs';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() child :Child;
  @Output() clickOnChild:EventEmitter<Child>=new EventEmitter<Child>();
  constructor() { 

  }

  ngOnInit() {
  }
   OnClick()
   {
      this.clickOnChild.emit(this.child);
   }
}
