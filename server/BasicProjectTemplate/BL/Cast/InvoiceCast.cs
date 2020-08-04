using DAL_DBFirst;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Cast
{
    class InvoiceCast
    {
        public static  InvoiceDTO GetInvoiceDTO(Invoice  invoiceDB)
        {
            InvoiceDTO inv = new InvoiceDTO();
            inv.companyID = invoiceDB.companyID;
            inv.date = invoiceDB.date;

            return inv;
        }

        public static Invoice  GetInvoiceDTO(InvoiceDTO invoice )
        {
            Invoice inv = new Invoice();
            inv.companyID = invoice.companyID;
            inv.date = invoice.date;

            return inv;
        }

    }

}
