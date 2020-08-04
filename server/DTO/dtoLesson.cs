using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class dtoLesson
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




        public int? WorkingDay { get; set; }
        public static Lesson castToDal(dtoLesson objToCast)
        {

            return new Lesson()
            {
                Id = objToCast.Id,
                Day = objToCast.Day,
                FromDate = objToCast.FromDate,
                EndDate = objToCast.EndDate,
                ChildId = objToCast.ChildId,
                StartsAt = objToCast.StartsAt,
                GroupId = objToCast.GroupId,
                Subject = objToCast.Subject,
                LessonDuration = objToCast.LessonDuration


            };
        }
        public static dtoLesson castToDto(Lesson objToCast)
        {


            return new dtoLesson()
            {
                Id = objToCast.Id,
                Day = objToCast.Day,
                FromDate = objToCast.FromDate,
                EndDate = objToCast.EndDate,
                ChildId = objToCast.ChildId,
                StartsAt = objToCast.StartsAt,
                GroupId = objToCast.GroupId,
                Subject = objToCast.Subject,
                LessonDuration = objToCast.LessonDuration

            };
    }
    }
}

