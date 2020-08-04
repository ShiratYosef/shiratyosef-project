import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Payment } from '../modules/Payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentesService {

  apiUrl: string = "http://localhost:65103/Api/Payment";
  constructor(private httpClient: HttpClient) { }
  returnCodePayment(): Observable<number> {
    return this.httpClient.get<number>(this.apiUrl + '/ReturnCodePayment')
  }
  GetPaymentByChildId(childId: string): Observable<Payment[]> {
    return this.httpClient.get<Payment[]>(this.apiUrl + '/GetPaymentByChildId?ChildId=' + childId);
  }
  SavePayment(payment: Payment): Observable<Payment> {
    return this.httpClient.post<Payment>(this.apiUrl + '/SavePayment', payment);
  }
  SaveCreditDetails() {

  }
  calculatePaymentforyear(childId: string): Observable<number> {
    return this.httpClient.get<number>(this.apiUrl + '/calculatePaymentforyear?ChildId=' + childId);
  }
  GetAllPayments(): Observable<Payment[]> {
    return this.httpClient.get<Payment[]>(this.apiUrl + '/GetAllPayments');

  }
}

