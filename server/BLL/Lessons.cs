using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BLL
{
   public class Lessons
    {
        static public TimeTableDevEntities context = new TimeTableDevEntities();
        public static List<dtoLesson> GetAllLessons()
        {
            List<dtoLesson> Lessons = new List<dtoLesson>();
            context.Lessons.ToList().ForEach(p => Lessons.Add(dtoLesson.castToDto(p)));
            return Lessons;
        }
        public static List<dtoLesson> GetLessonsByChildId(string childId)
        {
            List<dtoLesson> Lessons = new List<dtoLesson>();
            context.Lessons.ToList().Where(q=>q.ChildId==childId).ToList().ForEach(p => Lessons.Add(dtoLesson.castToDto(p)));
            return Lessons;
        }
        public static List<LessonWithDetails> GetLessonsWithDetaisByChildId(String childId)
        {
            //List<LessonWithDetails> Lessons = new List<LessonWithDetails>();
            //var lessons=context.Lessons.ToList().Where(q => q.ChildId == childId);

            //       .ToList().ForEach(p => Lessons.Add(dtoLesson.castToDto(p)));
       var Lessons=(
            from lesson in context.Lessons 
            where lesson.ChildId == childId 
            join teacher1 in context.Workers on lesson.TeacherId equals teacher1.Id into newteacher
            from teacher in newteacher.DefaultIfEmpty()
            join groups1 in context.Groups on lesson.GroupId equals groups1.code into newgroup
            from groups in newgroup.DefaultIfEmpty()
            join subject1 in context.Subjects on lesson.Subject equals subject1.SubjectId into newsubject
            from subject in newsubject.DefaultIfEmpty()
            select new LessonWithDetails
            {
         Id=lesson.Id, 
         Day =lesson.Day,
         FromDate=lesson.FromDate, 
         EndDate=lesson.EndDate, 
         ChildId=lesson.ChildId, 
         TeacherId=lesson.TeacherId, 
         StartsAt=lesson.StartsAt, 
         GroupId=lesson.GroupId, 
         Subject=lesson.Subject, 
         LessonDuration=lesson.LessonDuration, 
         FirstName=teacher==null?null:teacher.FirstName, 
         LastName= teacher == null ? null : teacher.LastName,
         GroupName =groups==null?null:groups.GroupName,
         SubjectName=subject==null?null:subject.SubjectName

            }).ToList();
            return Lessons;
        }
        //public static List<dtoLesson>[] GetLessonsDaysByChildId(string childId)
        //{
        //    List<dtoLesson>[] Arr = new List<dtoLesson>[7];
        //    for (int i = 1; i < 7; i++)
        //    {
        //        Arr[i] = new List<dtoLesson>();
        //    }

        //    var Lessons=Entities.context.Lessons.Where(p => p.ChildId == childId).ToList();//get all the lessons for this child
        //    //divide it to days 
        //    Lessons.ForEach(p =>
        //    {
        //        if (p.Day != null)
        //        Arr[Convert.ToInt32(p.Day)].Add(dtoLesson.castToDto(p));
        //    }
        //    );
        //    return Arr;
        //}



        //public static List<LessonWithDetails>[] GetLessonsDaysByChildId(string childId)
        //{
        //    List<LessonWithDetails>[] Arr = new List<LessonWithDetails>[7];
        //    for (int i = 1; i < 7; i++)
        //    {
        //        Arr[i] = new List<LessonWithDetails>();
        //    }
        //    //get all the lessons for this child
        //    var lessons = (from lesson in context.Lessons
        //                   where lesson.ChildId == childId
        //                   join teacher1 in context.Workers
        //                   on lesson.TeacherId equals teacher1.Id into newteacher
        //                   from teacher in newteacher.DefaultIfEmpty()
        //                   join subjects1 in context.Subjects
        //                   on lesson.Subject equals subjects1.SubjectId into newsubject
        //                   from subjects in newsubject.DefaultIfEmpty()
        //                   select new LessonWithDetails
        //                   {
        //                       Day = lesson.Day,
        //                       FromDate = lesson.FromDate,
        //                       EndDate = lesson.EndDate,
        //                       ChildId = lesson.ChildId,
        //                       TeacherId = lesson.TeacherId,
        //                       StartsAt = lesson.StartsAt,
        //                       GroupId = lesson.GroupId,
        //                       Subject = lesson.Subject,
        //                       LessonDuration = lesson.LessonDuration,
        //                       FirstName = teacher == null ? null : teacher.FirstName,
        //                       LastName = teacher == null ? null : teacher.LastName,
        //                       SubjectName = subjects == null ? null : subjects.SubjectName

        //                   }).ToList();
        //    //divide it to days 
        //    lessons.ForEach(p =>
        //    {
        //        if (p.Day != null)
        //            Arr[Convert.ToInt32(p.Day)].Add(p);
        //    }
        //    );

        //    return Arr;
        //}

        //Only lessons with teacher

        public static List<LessonWithDetails>[] GetLessonsDaysByChildId(string childId)
        {
            List<LessonWithDetails>[] Arr = new List<LessonWithDetails>[7];
            for (int i = 1; i < 7; i++)
            {
                Arr[i] = new List<LessonWithDetails>();
            }
            //get all the lessons for this child
            var lessons = (from lesson in context.Lessons
                           where lesson.ChildId == childId && lesson.TeacherId != null
                           join teacher1 in context.Workers
                           on lesson.TeacherId equals teacher1.Id into newteacher
                           from teacher in newteacher.DefaultIfEmpty()
                           join subjects1 in context.Subjects
                           on lesson.Subject equals subjects1.SubjectId into newsubject
                           from subjects in newsubject.DefaultIfEmpty()
                           select new LessonWithDetails
                           {
                               Day = lesson.Day,
                               FromDate = lesson.FromDate,
                               EndDate = lesson.EndDate,
                               ChildId = lesson.ChildId,
                               TeacherId = lesson.TeacherId,
                               StartsAt = lesson.StartsAt,
                               GroupId = lesson.GroupId,
                               Subject = lesson.Subject,
                               LessonDuration = lesson.LessonDuration,
                               FirstName = teacher == null ? null : teacher.FirstName,
                               LastName = teacher == null ? null : teacher.LastName,
                               SubjectName = subjects == null ? null : subjects.SubjectName

                           }).ToList();
            //divide it to days 
            lessons.ForEach(p =>
            {
                if (p.Day != null)
                    Arr[Convert.ToInt32(p.Day)].Add(p);
            }
            );

            return Arr;
        }
    }
}
