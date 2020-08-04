using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    using DAL;
    using System;
    using System.Collections.Generic;

    public class dtoSchool
    {
       

        public int SchoolId { get; set; }
        public string SchoolName { get; set; }
        public Nullable<int> City { get; set; }
        public string Address { get; set; }
        public string Telephon { get; set; }

       
       
       
        public static School castToDal(dtoSchool objToCast)
        {

            return new School()
            {
               SchoolId=objToCast.SchoolId,
               SchoolName=objToCast.SchoolName,
               City=objToCast.City,
               Address=objToCast.Address,
               Telephon=objToCast.Telephon


            };
        }
        public static dtoSchool castToDto(School objToCast)
        {


            return new dtoSchool()
            {
                SchoolId = objToCast.SchoolId,
                SchoolName = objToCast.SchoolName,
                City = objToCast.City,
                Address = objToCast.Address,
                Telephon = objToCast.Telephon

            };
        }

        //public static dtoSchool castToDtoList(List<School> listToCast)
        //{


        //    foreach (var item in listToCast)
        //    {
        //        listToCast`

        //    }
        //}
    }
}
