using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class dtoChild
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public dtoChild()
        {

        }

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


        public static Child castToDal(dtoChild objToCast)
        {
            using (TimeTableDevEntities db = new TimeTableDevEntities())
            {


                return new Child()
                {
                    IdentityNum = objToCast.IdentityNum,
                    FamilyId = objToCast.FamilyId,
                    FirstName = objToCast.FirstName,
                    Kind = objToCast.Kind,
                    BirthDate = objToCast.BirthDate,
                    PlaceInFamily = objToCast.PlaceInFamily,
                    SchoolId = objToCast.SchoolId,
                    Grade = objToCast.Grade,
                    JoiningDate = objToCast.JoiningDate,
                };
            }
        }
        public static dtoChild castToDto(Child objToCast)
        {
            using (TimeTableDevEntities db = new TimeTableDevEntities())
            {


                return new dtoChild()
                {
                    IdentityNum = objToCast.IdentityNum,
                    FamilyId = objToCast.FamilyId,
                    FirstName = objToCast.FirstName,
                    Kind = objToCast.Kind,
                    BirthDate = objToCast.BirthDate,
                    PlaceInFamily = objToCast.PlaceInFamily,
                    SchoolId = objToCast.SchoolId,
                    Grade = objToCast.Grade,
                    JoiningDate = objToCast.JoiningDate,
                };
            }
        }
        public static List<dtoChild> castToDto(List<Child> children)
        {
            List<dtoChild> newChildren = new List<dtoChild>();
            for (var item=0;item<children.Count;item++)
            {
              dtoChild newChild = new dtoChild()
            {
                IdentityNum = children[item].IdentityNum,
                FamilyId = children[item].FamilyId,
                FirstName = children[item].FirstName,
                Kind = children[item].Kind,
                BirthDate = children[item].BirthDate,
                PlaceInFamily = children[item].PlaceInFamily,
                SchoolId = children[item].SchoolId,
                Grade = children[item].Grade,
                JoiningDate = children[item].JoiningDate,
            };
                newChildren.Add(newChild);
            }
            return newChildren;
        }
    }
}

    

        
