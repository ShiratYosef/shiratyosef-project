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
    
    public partial class WorkingDay
    {
        public int Id { get; set; }
        public int WorkerId { get; set; }
        public int WeekDay { get; set; }
    
        public virtual Worker Worker { get; set; }
    }
}
