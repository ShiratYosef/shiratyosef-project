using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
  public   class InvoiceDTO
    {
        public string ID { get; set; }
        public string companyID { get; set; }
        public string sum { get; set; }
        public string invoiceID { get; set; }
        public Nullable<System.DateTime> date { get; set; }
        public Nullable<System.DateTime> paymentDate { get; set; }
    }
}
