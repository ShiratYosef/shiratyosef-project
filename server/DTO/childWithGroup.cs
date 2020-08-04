using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
  public class childWithGroup
    {
        public string IdentityNum { get; set; }
        public int FamilyId { get; set; }
        public string FirstName { get; set; }
        public Nullable<bool> Kind { get; set; }
        public Nullable<System.DateTime> BirthDate { get; set; }
        public Nullable<int> PlaceInFamily { get; set; }
        public Nullable<int> SchoolId { get; set; }
        public Nullable<int> Grade { get; set; }
        public Nullable<System.DateTime> JoiningDate { get; set; }
        public bool ViturSodiutFrom { get; set; }
        public string PreviousCare { get; set; }
        public string Note { get; set; }
        public bool IsActive { get; set; }
        public Nullable<bool> IsMunicipality { get; set; }
        public Nullable<int> sumAfterDiscount { get; set; }

        //group
        public int code { get; set; }

    }
}
