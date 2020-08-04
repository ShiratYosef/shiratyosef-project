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

    public partial class dtoWorkingDay
    {
       

        public int Id { get; set; }
        public int WorkerId { get; set; }
        public int WeekDay { get; set; }
        public static WorkingDay castToDal(dtoWorkingDay objToCast)
        {
                return new WorkingDay()
                {
                   Id=objToCast.Id,
                   WorkerId=objToCast.WorkerId,
                   WeekDay=objToCast.WeekDay
                };
        }
        public static dtoWorkingDay castToDto(WorkingDay objToCast)
        {
                return new dtoWorkingDay()
                {
                    Id = objToCast.Id,
                    WorkerId = objToCast.WorkerId,
                    WeekDay = objToCast.WeekDay

                };
          
        }
    }
}
