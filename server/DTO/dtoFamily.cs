using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class dtoFamily
    {
       

        public int FamilyId{ get; set; }
        public string FamilyName { get; set; }
        public string FatherFirstName { get; set; }
        public string MotherFirstName { get; set; }
        public Nullable<int> NumOfChildren { get; set; }
        public Nullable<int> CityId { get; set; }
        public string Address { get; set; }
        public string Telephone { get; set; }
        public string Cellular1 { get; set; }
        public string Cellular2 { get; set; }

        
        
    
    public static Family castToDal(dtoFamily objToCast)
    {

        return new Family
        {
           FamilyId=objToCast.FamilyId,
           FamilyName=objToCast.FamilyName,
           FatherFirstName=objToCast.FatherFirstName,
           MotherFirstName=objToCast.MotherFirstName,
           NumOfChildren=objToCast.NumOfChildren,
           CityId=objToCast.CityId,
           Address=objToCast.Address,
           Telephone=objToCast.Telephone,
           Cellular1=objToCast.Cellular1,
           Cellular2=objToCast.Cellular2
        };
    }
        public static dtoFamily castToDto(Family objToCast)
        {


            return new dtoFamily()
            {
                FamilyId = objToCast.FamilyId,
                FamilyName = objToCast.FamilyName,
                FatherFirstName = objToCast.FatherFirstName,
                MotherFirstName = objToCast.MotherFirstName,
                NumOfChildren = objToCast.NumOfChildren,
                CityId = objToCast.CityId,
                Address = objToCast.Address,
                Telephone = objToCast.Telephone,
                Cellular1 = objToCast.Cellular1,
                Cellular2 = objToCast.Cellular2
            };

        }
    }
}
