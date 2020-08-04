using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BLL
{
   public class Waitings
    {
        static public TimeTableDevEntities context = new TimeTableDevEntities();
        public static List<dtoChildRegistrationToSubject> GetWaitingsByChildId(String childId)
        {
            List < dtoChildRegistrationToSubject > Waitings = new List<dtoChildRegistrationToSubject>();
            context.ChildsRegistrationToSubjects.ToList().Where(q=>q.ChildId==childId).ToList()
                .ForEach(p => Waitings.Add(dtoChildRegistrationToSubject.castToDto(p)));
            return Waitings;
        }
        //public static void CreateWaitingForChild(dtoChildRegistrationToSubject waiting)
        //{
        //    Entities.context.ChildsRegistrationToSubjects.Add(dtoChildRegistrationToSubject.castToDal(waiting));
        //}
        public static void AddWaitingChild(dtoChildRegistrationToSubject child)
        {
           ChildsRegistrationToSubject Newchild = dtoChildRegistrationToSubject.castToDal(child);
            context.ChildsRegistrationToSubjects.Add(Newchild);
            context.SaveChanges();
        }

        public static void DeleteWaitingByObj(dtoChildRegistrationToSubject child)
        {
            var Child = context.ChildsRegistrationToSubjects.FirstOrDefault(p => p.ChildId == child.ChildId&&p.SubjectId==child.SubjectId);
            if(Child!=null)
            {
                context.ChildsRegistrationToSubjects.Remove(Child);
                context.SaveChanges();
            }
        }

        public static List<ChildWithFamilyDetails> GetWaitingsChildrenBySubjectId(int? subjectId)
        {
            // List<dtoChild> WaitingsChildren = new List<dtoChild>();

            //context.Childs.ToList().Where(p => p.ChildsRegistrationToSubjects
            //.FirstOrDefault(q => q.SubjectId == subjectId)!=null).ToList()
            //.ForEach(q=> WaitingsChildren.Add(dtoChild.castToDto(q)));
            // return WaitingsChildren;
            List<ChildWithFamilyDetails> WaitingsChildren = new List<ChildWithFamilyDetails>();
           var children=context.Childs.ToList().Where(p => p.ChildsRegistrationToSubjects
            .FirstOrDefault(q => q.SubjectId == subjectId) != null).ToList();
            WaitingsChildren = (from child in children
                                join family1 in context.Families
                                on child.FamilyId equals family1.FamilyId into newfamily
                                from family in newfamily.DefaultIfEmpty()
                                join school1 in context.Schools 
                                on child.SchoolId equals school1.SchoolId into newschool
                                from school in newschool.DefaultIfEmpty()
                                select new ChildWithFamilyDetails
                                {
                                    IdentityNum = child.IdentityNum,
                                    FamilyId = child.FamilyId,
                                    FirstName = child.FirstName,
                                    FamilyName = family.FamilyName,
                                    FatherFirstName = family.FatherFirstName,
                                    MotherFirstName = family.MotherFirstName,
                                    NumOfChildren = family.NumOfChildren,
                                    CityId = family.CityId,
                                    Address = family.Address,
                                    Telephone = family.Telephone,
                                    Cellular1 = family.Cellular1,
                                    Cellular2 = family.Cellular2,
                                    Kind = child.Kind,
                                    BirthDate = child.BirthDate,
                                    PlaceInFamily = child.PlaceInFamily,
                                    SchoolId = child.SchoolId,
                                    Grade = child.Grade,
                                    JoiningDate = child.JoiningDate,
                                    ViturSodiutFrom = child.ViturSodiutFrom,
                                    PreviousCare = child.PreviousCare,
                                    Note = child.Note,
                                    IsActive = child.IsActive,
                                    IsMunicipality = child.IsMunicipality,
                                    sumAfterDiscount = child.sumAfterDiscount,
                                    SchoolName = school==null?null:school.SchoolName
                                }).ToList();
            return WaitingsChildren;
        }

        public static void SaveWaiting(dtoChildRegistrationToSubject waiting)
        {
           context.ChildsRegistrationToSubjects.Add(dtoChildRegistrationToSubject.castToDal(waiting));
        }

        //Entities.context.Schools.Remove(Entities.context.Schools.FirstOrDefault(p => p.SchoolId == school.SchoolId));
        public static void UpdateWaiting(dtoSubject subject)
        {

            var lessons =context.Lessons.Where(p => p.Subject == subject.SubjectId);
            foreach (var item in lessons)
            {
                item.Subject = null;
            }
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
        public static void DeleteWaiting(int subjectId)
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
        public static List<dtoChildRegistrationToSubject> GetAllWitings()
        {
            List<dtoChildRegistrationToSubject> children = new List<dtoChildRegistrationToSubject>();
            context.ChildsRegistrationToSubjects.ToList().ForEach(p => children.Add(dtoChildRegistrationToSubject.castToDto(p)));
            return children;
        }
        public static List<WaitingsWithSubjectName> getWaitingByChildId(string childId)
        {
            List<WaitingsWithSubjectName> list = new List<WaitingsWithSubjectName>();
            //var waiting = context.ChildsRegistrationToSubjects.Where(p => p.ChildId == childId);
            //var subjects=context.Subjects.where
            list = (from childsRegistrationToSubject in context.ChildsRegistrationToSubjects
                    where childsRegistrationToSubject.ChildId == childId
                    join subject in context.Subjects
                    on childsRegistrationToSubject.SubjectId equals subject.SubjectId
                    select new WaitingsWithSubjectName
                    {
                      
                         SubjectId= childsRegistrationToSubject.SubjectId,
                         ChildId = childsRegistrationToSubject.ChildId,
                         Id = childsRegistrationToSubject.Id,
                         RegisterDate= childsRegistrationToSubject.RegisterDate,
                         WaitMode= childsRegistrationToSubject.WaitMode,
                         Comments = childsRegistrationToSubject.Comments,
                         SubjectName =subject==null?null:subject.SubjectName
                    }).ToList();
            return list;
        }
        public static List<dtoSubject> MaxWitingsForSubject()
        {
            List<dtoSubject> NewSubjects =new List<dtoSubject>();
            List<ChildsRegistrationToSubject> list = new List<ChildsRegistrationToSubject>();
            int max = 0;
            int countSub = 0;
            int count = 0;
            foreach (var subject in context.Subjects)
            {
                list = context.ChildsRegistrationToSubjects.Where(p => p.SubjectId == subject.SubjectId&&p.ChildId!=null).ToList();
                countSub = list.Count;
                if (countSub > max)
                {
                    max = countSub;
                    count = NewSubjects.Count;
                    if (count > 1)
                    {
                        foreach (var sub in NewSubjects)
                        {
                            Subject s = new Subject();
                            s = dtoSubject.castToDal(sub);
                            NewSubjects.Remove(dtoSubject.castToDto(s));
                        }
                        NewSubjects.Add(dtoSubject.castToDto(subject));
                    }
                    else
                        NewSubjects.Add(dtoSubject.castToDto(subject));
                }
                else if (countSub == max)
                {
                    NewSubjects.Add(dtoSubject.castToDto(subject));
                }
            }
            return NewSubjects;
        }
    }
}
