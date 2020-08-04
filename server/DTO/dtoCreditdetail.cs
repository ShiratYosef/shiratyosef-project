using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    class dtoCreditDetail
    {
        public string CreditDetailsId { get; set; }
        public int PaymentId { get; set; }
        public string PayerName { get; set; }
        public string OwnerName { get; set; }
        public string OwnerIdentityNumber { get; set; }
        public string CreditNumber { get; set; }
        public string CardExpirationDate { get; set; }
        public string ThreeLastDigits { get; set; }
        public Nullable<int> NumberOfPayments { get; set; }
        public Nullable<System.DateTime> FirstRepaymentDate { get; set; }
        public string Comments { get; set; }

        
    
    public static CreditDetail castToDal(dtoCreditDetail objToCast)
    {

            return new CreditDetail()
            {
                CreditDetailsId = objToCast.CreditDetailsId,
                PaymentId = objToCast.PaymentId,
                PayerName = objToCast.PayerName,
                OwnerName=objToCast.OwnerName,
                OwnerIdentityNumber=objToCast.OwnerIdentityNumber,
                CreditNumber=objToCast.CreditNumber,
                CardExpirationDate=objToCast.CardExpirationDate,
                ThreeLastDigits=objToCast.ThreeLastDigits,
                NumberOfPayments=objToCast.NumberOfPayments,
                FirstRepaymentDate=objToCast.FirstRepaymentDate,
                Comments=objToCast.Comments

            };
    }
    public static dtoCreditDetail castToDto(CreditDetail objToCast)
    {
     

            return new dtoCreditDetail()
            {
                CreditDetailsId = objToCast.CreditDetailsId,
                PaymentId = objToCast.PaymentId,
                PayerName = objToCast.PayerName,
                OwnerName = objToCast.OwnerName,
                OwnerIdentityNumber = objToCast.OwnerIdentityNumber,
                CreditNumber = objToCast.CreditNumber,
                CardExpirationDate = objToCast.CardExpirationDate,
                ThreeLastDigits = objToCast.ThreeLastDigits,
                NumberOfPayments = objToCast.NumberOfPayments,
                FirstRepaymentDate = objToCast.FirstRepaymentDate,
                Comments = objToCast.Comments
            };
        
    }
}
}
