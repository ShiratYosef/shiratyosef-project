//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class Payment
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Payment()
        {
            this.CreditDetails = new HashSet<CreditDetail>();
        }
    
        public int PaymentId { get; set; }
        public string ChildIdentityNumber { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
        public Nullable<int> PaymentForm { get; set; }
        public Nullable<int> Sum { get; set; }
    
        public virtual CheckDetail CheckDetail { get; set; }
        public virtual Child Child { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CreditDetail> CreditDetails { get; set; }
    }
}
