using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
namespace DTO
{
    class dtoCheckDetail
    {
        public int PaymentId { get; set; }
        public string AccountOwnerName { get; set; }
        public string AccountNumber { get; set; }
        public int? BankId { get; set; }
        public string BranchName { get; set; }
        public int? BranchNumber { get; set; }
        public Nullable<System.DateTime> RepaymentDate { get; set; }
        public Nullable<int> Sum { get; set; }
        public string Comments  { get; set; }

       
        
        public static CheckDetail castToDal(dtoCheckDetail objToCast)
        {
            using (TimeTableDevEntities db =new TimeTableDevEntities())
            {


                return new CheckDetail()
                {
                    PaymentId = objToCast.PaymentId,
                    AccountOwnerName = objToCast.AccountOwnerName,
                    AccountNumber = objToCast.AccountNumber
                ,
                    BankId = objToCast.BankId,
                    BranchName = objToCast.BranchName,
                    Bank = db.Banks.FirstOrDefault(p => p.BankId == objToCast.BankId),
                    Payment = db.Payments.FirstOrDefault(p => p.PaymentId == objToCast.PaymentId)
                };
            }
        
         
        }
        public static dtoCheckDetail castToDto(CheckDetail objToCast)
        {
            return new dtoCheckDetail()
            {
                PaymentId = objToCast.PaymentId,
                AccountOwnerName = objToCast.AccountOwnerName,
                AccountNumber = objToCast.AccountNumber
           ,
                BankId = objToCast.BankId,
                BranchName = objToCast.BranchName,
            };

        }
    }
}
