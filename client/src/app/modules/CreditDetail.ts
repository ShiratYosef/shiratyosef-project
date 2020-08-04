export class CreditDetail{
    constructor(
      public CreditDetailsId:String,
      public  PaymentId:number,
      public PayerName:String,
      public OwnerName:String,
      public OwnerIdentityNumber:String,
    
      public CreditNumber:String,
      public CardExpirationDate:String,
      public ThreeLastDigits:String,
      public NumberOfPayments:number,
      public FirstRepaymentDate:Date,
      public Comments:String
  
      ){}
}