using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class Subjects
    {
        static public TimeTableDevEntities context = new TimeTableDevEntities();
        public static List<DTO.dtoSubject> GetAllSubjects()
        {
            List<DTO.dtoSubject> subjects = new List<DTO.dtoSubject>();
            context.Subjects.ToList().ForEach(p => subjects.Add(DTO.dtoSubject.castToDto(p)));
            return subjects;
        }
        //public static void SaveSubject(dtoSubject subject)
        //{


        //    Subject NewSubject = dtoSubject.castToDal(subject);
        //    Subject ExistSubject = Entities.context.Subjects.FirstOrDefault(p => p.SubjectId == NewSubject.SubjectId);
        //    if (ExistSubject != null)
        //    {
        //        Entities.context.Subjects.Remove(ExistSubject);
        //    }
        //    Entities.context.Subjects.Add(ExistSubject);           
        //}
        public static void SaveSubject(dtoSubject subject)
        {
            Subject NewSubject = dtoSubject.castToDal(subject);
            //School ExistSchool = Entities.context.Schools.FirstOrDefault(p => p.SchoolId == NewSchool.SchoolId);
            //if (ExistSchool != null)
            //{
            //    Entities.context.Schools.Remove(ExistSchool);
            //}
            context.Subjects.Add(NewSubject);
            context.SaveChanges();
        }

        public static void UpdateSubject(dtoSubject subject)
       {

            var lessons =context.Lessons.Where(p => p.Subject == subject.SubjectId);
            foreach (var item in lessons)
            {
                item.Subject = null;
            }
            //Entities.context.Schools.Remove(Entities.context.Schools.FirstOrDefault(p => p.SchoolId == school.SchoolId));
           Subject NewSubject = dtoSubject.castToDal(subject);
            Subject ExistSubject =context.Subjects.FirstOrDefault(p => p.SubjectId == NewSubject.SubjectId);
            if (ExistSubject != null)
            {
                context.Subjects.Remove(ExistSubject);
                context.SaveChanges();
            }
            context.Subjects.Add(NewSubject);
            context.SaveChanges();
            foreach (var item in lessons)
            {
                item.Subject = subject.SubjectId;
            }
            context.SaveChanges();

        }
        public static void DeleteSubject(int subjectId)
        {

            var subject =context.Subjects.FirstOrDefault(a => a.SubjectId == subjectId);
            var lessons =context.Lessons.Where(p => p.Subject == subjectId);
            foreach (var item in lessons)
            {
                item.Subject = null;
            }
            context.Subjects.Remove(subject);
            context.SaveChanges();

        }
    }
}
