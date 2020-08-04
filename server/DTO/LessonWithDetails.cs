using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
  public class LessonWithDetails
    {
        public int Id { get; set; }
        public int? Day { get; set; }
        public Nullable<System.DateTime> FromDate { get; set; }
        public Nullable<System.DateTime> EndDate { get; set; }
        public string ChildId { get; set; }
        public Nullable<int> TeacherId { get; set; }
        public System.TimeSpan StartsAt { get; set; }
        public Nullable<int> GroupId { get; set; }
        public Nullable<int> Subject { get; set; }
        public Nullable<double> LessonDuration { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string GroupName { get; set; }

        public string SubjectName { get; set; }

    }
}
