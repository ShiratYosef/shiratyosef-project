import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
// export class HeaderComponent implements OnInit {
//   isActive:boolean=false;
//   navIsActive:boolean=false;
//   constructor() { }

//   ngOnInit() {
//   }
//   onMouseOver(){
//     this.isActive=true;
//     this.navIsActive=true;
//   }
//   onMouseOut(){
//     this.isActive=false;
//   }
//   navOnMouseOut(){
//     this.navIsActive=false;
//   }
// }
export class HeaderComponent implements OnInit {
  isNavActive:boolean[]=[false,false,false,false];
  constructor() { }

  ngOnInit() {
  }
  onMouseOverchild(navIndex){
    this.isNavActive[navIndex-1]=false;
    this.isNavActive[navIndex+1]=false;
    this.isNavActive[navIndex]=true;
  }
  
  onMouseOut(navIndex){
    this.isNavActive[navIndex]=false;
  }
  
}
