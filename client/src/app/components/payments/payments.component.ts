import { Component, OnInit } from '@angular/core';
import { Child } from 'src/app/modules/Child';
import { Payment } from 'src/app/modules/Payment';
import { MatDialog } from '@angular/material/dialog';
import { CreditDetailsComponent } from '../credit-details/credit-details.component';
import { CheckDetailsComponent } from '../check-details/check-details.component';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ChildWithDetails } from 'src/app/modules/child-with-details';
import { ChildrenService } from 'src/app/services/children.service';
import { LessonService } from 'src/app/services/lesson.service';
import { LassonWithDetails } from 'src/app/modules/lasson-with-details';
import { PaymentesService } from 'src/app/services/paymentes.service';
import { Lesson } from 'src/app/modules/Lesson';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})

export class PaymentsComponent implements OnInit {
  children: ChildWithDetails[];
  newChildren: ChildWithDetails[];
  startDate = Date.now();
  constructor(private dialog: MatDialog, private childrenService: ChildrenService,
    private LessonService: LessonService, private paymentService: PaymentesService) { }
  payment: Payment = new Payment();
  paymentType: string;
  types: string[] = ["אשראי", "מזומן", "צ'ק"];
  stateCtrl: FormControl = new FormControl();
  filteredStates: Observable<Child[]>;
  displayedColumns = ['SubjectName', 'StartsAt', 'LessonDuration'];
  displayedColumns1 = ['Date', 'Sum'];
  exampleDatabase: LessonService | null;
  lessons: LassonWithDetails[];
  yearlessons: Lesson[];
  paymentsForChild: Payment[];
  codePayment: Number;
  result: Payment;
  payments: Payment[];
  count: number = 0;
  sum: number = 0;
  CountOfPayments: number = 0;
  paidSum:number=622;
  YearSum:number=0;
  unPaid:number=5378;
  ngOnInit() {
    // this.paymentService.returnCodePayment().subscribe(res => {this.codePayment = res;
    //    alert(this.codePayment);
    //   });
    this.getAllChildren();
    this.GetAllPayments();
  }
  getAllChildren() {
    this.childrenService.GetAllChildrenWithDetails().subscribe(
      state => {
        this.children = state;
        this.newChildren = this.children;
      });
  }
  GetLessons(IdentityNum) {
    this.LessonService.GetLessonsWithDetaisByChildId(IdentityNum).subscribe(res => this.lessons = res);
    // this.lessons = this.lessons.filter(p => p.TeacherId != null);
  }
  getPayments(IdentityNum) {
    this.paymentService.GetPaymentByChildId(IdentityNum).subscribe(state => this.paymentsForChild = state);
  }
  searchByName(event) {
    this.newChildren = this.children.filter(p => p.FirstName.startsWith(event) == true)
  }
  yearLessons(IdentityNum) {
    this.LessonService.GetLessonsByChildId(IdentityNum).subscribe(res => {
      this.yearlessons = res;
      this.count = this.yearLessons.length;
    });

    alert(this.count);
    return this.count;
  }
  selectedChild(IdentityNum) {
    this.payment.ChildIdentityNumber = IdentityNum;
    this.GetLessons(IdentityNum);
    this.getPayments(IdentityNum);
    this.yearSum(IdentityNum);
    this.yearLessons(IdentityNum);
    this.countOfPayments(IdentityNum);
  }
  yearSum(IdentityNum) {
    this.paymentService.calculatePaymentforyear(IdentityNum).subscribe(res => this.sum = res);
    this.YearSum=6000;
  }
  savePayment() {
    this.payment.PaymentForm = this.types.indexOf(this.paymentType);
    this.paymentService.SavePayment(this.payment).subscribe(res => this.result = res);
  }
  openModal(type) {
    this.paymentType = type;
    if (type == "אשראי") {
      const dialogRef = this.dialog.open(CreditDetailsComponent, {
        data: { type: type }
      });
      //   dialogRef.afterClosed().subscribe(result => {
      //     if (result === 1) {
      //       this.citiesSrvice.GetAllCities().subscribe(state=>{
      //         this.newCities=state;
      //         this.cities=this.newCities;
      //       });
      //     }
      //   });
      // }
    }
    else if (type == "צ'ק") {
      const dialogRef = this.dialog.open(CheckDetailsComponent, {
        data: { type: type }
      });
    }
  }
  GetAllPayments() {
    this.paymentService.GetAllPayments().subscribe(res => this.payments = res);
  }
  countOfPayments(IdentityNum) {
    this.paymentService.GetPaymentByChildId(IdentityNum).subscribe(data => {
      this.payments = data;
      this.CountOfPayments = this.payments.length;
    })
  }
}
