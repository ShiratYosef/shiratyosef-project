//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL_DBFirst
{
    using System;
    using System.Collections.Generic;
    
    public partial class Invoice 
    {
        public string ID { get; set; }
        public string companyID { get; set; }
        public string sum { get; set; }
        public string invoiceID { get; set; }
        public Nullable<System.DateTime> date { get; set; }
        public Nullable<System.DateTime> paymentDate { get; set; }
    }
}
