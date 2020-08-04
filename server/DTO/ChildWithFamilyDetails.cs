using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
  public class ChildWithFamilyDetails
    {
        public string IdentityNum { get; set; }
        public int FamilyId { get; set; }
        public string FirstName { get; set; }
        public string FamilyName { get; set; }
        public string FatherFirstName { get; set; }
        public string MotherFirstName { get; set; }
        public Nullable<int> NumOfChildren { get; set; }
        public Nullable<int> CityId { get; set; }
        public string Address { get; set; }
        public string Telephone { get; set; }
        public string Cellular1 { get; set; }
        public string Cellular2 { get; set; }

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
        public string SchoolName { get; set; }
        public string CityName { get; set; }

        //public ChildWithFamilyDetails(string IdentityNum,int FamilyId,string FirstName,string FamilyName,string FatherFirstName,string MotherFirstName,
        //         int? NumOfChildren,int? CityId,string Address,string Telephone,string Cellular1,string Cellular2,
        //        bool? Kind,DateTime? BirthDate,int? PlaceInFamily,int? SchoolId,int? Grade,DateTime? JoiningDate,bool ViturSodiutFrom,string PreviousCare,
        //        string Note,bool IsActive,bool? IsMunicipality,int? sumAfterDiscount,string SchoolName,string CityName)
        //{
        //    this.IdentityNum = IdentityNum;
        //    this.FamilyId = FamilyId;
        //    this.FirstName = FirstName;
        //    this.FamilyName = FamilyName;
        //    this.FatherFirstName = FatherFirstName;
        //    this.MotherFirstName = MotherFirstName;
        //    this.NumOfChildren = NumOfChildren;
        //    this.CityId = CityId;
        //    this.Address = Address;
        //    this.Telephone = Telephone;
        //    this.Cellular1 = Cellular1;
        //    this.Cellular2 = Cellular2;
        //    this.Kind = Kind;
        //    this.BirthDate = BirthDate;
        //    this.PlaceInFamily = PlaceInFamily;
        //    this.SchoolId = SchoolId;
        //    this.Grade = Grade;
        //    this.JoiningDate = JoiningDate;
        //    this.ViturSodiutFrom = ViturSodiutFrom;
        //    this.PreviousCare = PreviousCare;
        //    this.Note = Note;
        //    this.IsActive = IsActive;
        //    this.IsMunicipality = IsMunicipality;
        //    this.sumAfterDiscount = sumAfterDiscount;
        //    this.SchoolName = SchoolName;
        //    this.CityName = CityName;
        //}

    }
}
