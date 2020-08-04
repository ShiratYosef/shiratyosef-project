using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class dtoGroup
    {
      


        public int code { get; set; }
        public Nullable<int> SchoolId { get; set; }
        public Nullable<int> grade1    { get; set; }
        public Nullable<int> grade2     { get; set; }
        public Nullable<int> TreatmentType { get; set; }
        public string GroupName { get; set; }

      
       
      
        public static Group castToDal(dtoGroup objToCast)
        {

            return new Group()
            {
                code=objToCast.code,
                SchoolId=objToCast.SchoolId,
                grade1=objToCast.grade1,
                grade2=objToCast.grade2,
                TreatmentType=objToCast.TreatmentType,
                GroupName=objToCast.GroupName
            };
        }
        public static dtoGroup castToDto(Group objToCast)
        {


            return new dtoGroup()
            {
                code = objToCast.code,
                SchoolId = objToCast.SchoolId,
                grade1 = objToCast.grade1,
                grade2 = objToCast.grade2,
                TreatmentType = objToCast.TreatmentType,
                GroupName = objToCast.GroupName
            };

        }
    }
}
