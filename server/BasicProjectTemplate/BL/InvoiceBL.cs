using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    class InvoiceBL
    {
        public InvoiceDTO GetInvoce(string id)
        {
            //טעות שהגדירו לו את ה- ID כ- string
            DAL_DBFirst.BOOKEEPEREntities  ent = new DAL_DBFirst.BOOKEEPEREntities();
            var inv= ent.Invoices.Where(q => q.invoiceID == id).FirstOrDefault();
            return Cast.InvoiceCast.GetInvoiceDTO(inv);
        }
    }
}
