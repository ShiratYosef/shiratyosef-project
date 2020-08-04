using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    using DAL;
    using System;
    using System.Collections.Generic;

    public partial class dtoPayment
    {

        public int PaymentId { get; set; }
        public string ChildIdentityNumber { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
        public Nullable<int> PaymentForm { get; set; }
        public Nullable<int> Sum { get; set; }

        
        public static Payment castToDal(dtoPayment objToCast)
        {
            using (TimeTableDevEntities db = new TimeTableDevEntities()) { 

            return new Payment()
             {
                
              PaymentId=objToCast.PaymentId,
              ChildIdentityNumber=objToCast.ChildIdentityNumber,
              Date=objToCast.Date,
              PaymentForm=objToCast.PaymentForm,
              Sum=objToCast.Sum,
              //CheckDetail=db.CheckDetails.FirstOrDefault(p=>p.PaymentId==objToCast.PaymentId)

            };
            }
        }
        public static dtoPayment castToDto(Payment objToCast)
        {


            return new dtoPayment()
            {
                PaymentId = objToCast.PaymentId,
                ChildIdentityNumber = objToCast.ChildIdentityNumber,
                Date = objToCast.Date,
                PaymentForm = objToCast.PaymentForm,
                Sum = objToCast.Sum,
                

            };
        }
    }

}

