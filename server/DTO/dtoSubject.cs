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

    public class dtoSubject
    {
        public int SubjectId { get; set; }
        public string SubjectName { get; set; }
        public Nullable<int> MinNumOfMeeting { get; set; }
        public Nullable<int> AvgNumOfMeeting { get; set; }
        public Nullable<int> MinAge { get; set; }
        public Nullable<int> MaxAge { get; set; }
        public Nullable<int> DurationInMinuts { get; set; }
        public static Subject castToDal(dtoSubject objToCast)
        {
            return new Subject()
            {
                SubjectId=objToCast.SubjectId,
                SubjectName=objToCast.SubjectName,
                MinNumOfMeeting=objToCast.MinNumOfMeeting,
                AvgNumOfMeeting=objToCast.AvgNumOfMeeting,
                 MinAge=objToCast.MinAge,
                 MaxAge=objToCast.MaxAge,
                 DurationInMinuts=objToCast.DurationInMinuts
            };
        }

        public static dtoSubject castToDto(Subject objToCast)
        {

            return new dtoSubject()
            {
                SubjectId = objToCast.SubjectId,
                SubjectName = objToCast.SubjectName,
                MinNumOfMeeting = objToCast.MinNumOfMeeting,
                AvgNumOfMeeting = objToCast.AvgNumOfMeeting,
                MinAge = objToCast.MinAge,
                MaxAge = objToCast.MaxAge,
                DurationInMinuts = objToCast.DurationInMinuts
            };

        }
    }
}
