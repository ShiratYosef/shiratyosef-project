using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class dtoChildRegistrationToSubject
    {
        public Nullable<int> SubjectId { get; set; }
        public string ChildId { get; set; }
        public int Id { get; set; }
        public Nullable<System.DateTime> RegisterDate { get; set; }
        public Nullable<bool> WaitMode { get; set; }
        public string Comments { get; set; }

        public static ChildsRegistrationToSubject castToDal(dtoChildRegistrationToSubject objToCast)
        {
            using (TimeTableDevEntities db = new TimeTableDevEntities())
            {


                return new ChildsRegistrationToSubject()
                {
                    SubjectId = objToCast.SubjectId,
                    ChildId = objToCast.ChildId,
                    Id=objToCast.Id,
                    RegisterDate=objToCast.RegisterDate,
                    WaitMode=objToCast.WaitMode,
                    Comments=objToCast.Comments


                };
            }
        }
        public static dtoChildRegistrationToSubject castToDto(ChildsRegistrationToSubject objToCast)
        {
            using (TimeTableDevEntities db = new TimeTableDevEntities())
            {


                return new dtoChildRegistrationToSubject()
                {
                    SubjectId = objToCast.SubjectId,
                    ChildId = objToCast.ChildId,
                    Id = objToCast.Id,
                    RegisterDate = objToCast.RegisterDate,
                    WaitMode = objToCast.WaitMode,
                    Comments = objToCast.Comments
                };
            }
        }
    }
}
