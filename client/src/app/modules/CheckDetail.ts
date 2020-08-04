export class CheckDetail{
    constructor(
        public PaymentId:number,
        public AccountOwnerName:String,
        public AccountNumber:String,
        public BankId:number,
        public BranchName:String,
        public BranchNumber:number,
        public RepaymentDate:Date,
        public Sum:number,
        public Comments:String){}
}