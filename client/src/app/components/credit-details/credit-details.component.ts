import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PaymentesService } from 'src/app/services/paymentes.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-credit-details',
  templateUrl: './credit-details.component.html',
  styleUrls: ['./credit-details.component.css']
})
export class CreditDetailsComponent implements OnInit {
  startDate = new Date();
  constructor(public dialogRef: MatDialogRef<CreditDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public paymentService:PaymentesService) { }

  ngOnInit() {
  }
  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
    ]);
    
    getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
    this.formControl.hasError('email') ? 'Not a valid email' :
    '';
    }
    
    submit() {
    // emppty stuff
    }
    
    onNoClick(): void {
    this.dialogRef.close();
    }
    
    // public confirmAdd(): void {
    // this.paymentService.addCity(this.data).subscribe(state=>this.data=state);
    
    // }
    confirmAdd(){

    }
}
