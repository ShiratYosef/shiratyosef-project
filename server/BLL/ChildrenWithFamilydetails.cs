using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DAL;
using System.Data.Entity;
using System.Runtime.Remoting.Contexts;

namespace BLL
{
    public class ChildrenWithFamilydetails
    {
        static public TimeTableDevEntities context = new TimeTableDevEntities();
        public static List<DTO.ChildWithFamilyDetails> GetAllChildrenWithDetails()
        {
            //List<DTO.ChildWithFamilyDetails> children = new List<DTO.ChildWithFamilyDetails>();
            //DAL.Family FamilyDetails = new DAL.Family();
            //DAL.City CityDetails = new DAL.City();
            //DAL.School schoolDetails = new DAL.School();
            //context.Childs.ToList().ForEach(p =>
            //{
            //    FamilyDetails = context.Families.FirstOrDefault(q => p.FamilyId == q.FamilyId);
            //    schoolDetails = context.Schools.FirstOrDefault(z => p.SchoolId == z.SchoolId);
            //    CityDetails = context.Cities.FirstOrDefault(m => m.CityId == FamilyDetails.CityId);
            //    DTO.ChildWithFamilyDetails child = new DTO.ChildWithFamilyDetails(p.IdentityNum, p.FamilyId, p.FirstName, FamilyDetails.FamilyName, FamilyDetails.FatherFirstName, FamilyDetails.MotherFirstName,
            //       FamilyDetails.NumOfChildren, FamilyDetails.CityId, FamilyDetails.Address, FamilyDetails.Telephone, FamilyDetails.Cellular1, FamilyDetails.Cellular2,
            //       p.Kind, p.BirthDate, p.PlaceInFamily, p.SchoolId, p.Grade, p.JoiningDate, p.ViturSodiutFrom, p.PreviousCare, p.Note, p.IsActive,
            //       p.IsMunicipality, p.sumAfterDiscount, schoolDetails == null ? null : schoolDetails.SchoolName, CityDetails == null ? null : CityDetails.CityName);
            //    children.Add(child);
            //});
            var children = (from child in context.Childs
                            join family1 in context.Families on child.FamilyId equals family1.FamilyId into newfamily
                            from family in newfamily.DefaultIfEmpty()
                            join city1 in context.Cities on family.CityId equals city1.CityId into newcity
                            from city in newcity.DefaultIfEmpty()
                            join school1 in context.Schools on child.SchoolId equals school1.SchoolId into newschool
                            from school in newschool.DefaultIfEmpty()
                            select new DTO.ChildWithFamilyDetails
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
                                SchoolName = school.SchoolName,
                                CityName = city.CityName
                            }).ToList();


            return children;
        }


        public static void AddChildrenWithDetails(ChildWithFamilyDetails child)
        {
            //Child Newchild = dtoChild.castToDal(child);
            Child ExistChild = context.Childs.FirstOrDefault(p => p.IdentityNum == child.IdentityNum);
            if (ExistChild != null)
            {
                context.Childs.Remove(ExistChild);
                context.SaveChanges();
            }
            Child child1 = new Child(child.IdentityNum, child.FamilyId, child.FirstName, child.Kind, child.BirthDate, child.PlaceInFamily,
                child.SchoolId, child.Grade, child.JoiningDate, child.ViturSodiutFrom, child.PreviousCare, child.Note, child.IsActive,
                child.IsMunicipality, child.sumAfterDiscount);
            context.SaveChanges();

            context.Childs.Add(child1);
            context.SaveChanges();

        }


        public static bool UpdateChildrenWithDetails(ChildWithFamilyDetails child)
        {
            var Child = context.Childs.FirstOrDefault(p => p.IdentityNum == child.IdentityNum);
            var family = context.Families.FirstOrDefault(p => p.FamilyId == Child.FamilyId);
            Child ExistChild = context.Childs.FirstOrDefault(p => p.IdentityNum == child.IdentityNum);
            if (ExistChild != null)
            {
                Child.IdentityNum = child.IdentityNum;
                Child.FirstName = child.FirstName;
                //family.FamilyName = child.FamilyName;
                //family.FatherFirstName = child.FatherFirstName;
                //family.MotherFirstName = child.MotherFirstName;
                //family.CityId = child.CityId;
                //family.Address = child.Address;
                //family.Telephone = child.Telephone;
                //family.Cellular1 = child.Cellular1;
                //family.Cellular2 = child.Cellular2;
                Child.BirthDate = child.BirthDate;
                Child.SchoolId = child.SchoolId;
                Child.Grade = child.Grade;
                Child.JoiningDate = child.JoiningDate;
                Child.Note = child.Note;
                context.SaveChanges();
                return true;
            }
            return false;
        }

        public static void DeleteChildrenWithDetails(string childId)
        {
            Child ExistChild = new Child();
            ExistChild = context.Childs.FirstOrDefault(p => p.IdentityNum == childId);
            if (ExistChild != null)
            {
                int family = context.Childs.Count(p => p.FamilyId == ExistChild.FamilyId);
                var lessons = context.Lessons.Where(p => p.ChildId == childId);
                foreach (var item in lessons)
                {
                    item.ChildId = childId;
                    //context.SaveChanges();

                    //context.SaveChanges();
                    //Lesson lesson = item;
                    context.Lessons.Remove(item);
                }
                context.SaveChanges();
                var groups = context.Groups.Where(p => p.Childs.FirstOrDefault(q => q.IdentityNum == childId) != null);

                foreach (var item in groups)
                {
                    item.Childs.ToList().RemoveAll(r => r.IdentityNum==childId);

                    //foreach (var it in item.Childs)
                    //{

                    //    if (it.IdentityNum == childId)
                    //        it.IdentityNum = null;
                    //}
                }
                context.SaveChanges();

                context.Childs.Remove(ExistChild);
                context.SaveChanges();
                if (family == 1)
                {
                    DAL.Family family1 = context.Families.FirstOrDefault(p => p.FamilyId == ExistChild.FamilyId);
                    context.Families.Remove(family1);
                    context.SaveChanges();
                }

            }
        }
        public static DTO.ChildWithFamilyDetails GetChildWithDetailsById(string childId)
        {
            DAL.Child child = new DAL.Child();
            DAL.Family family = new DAL.Family();
            DAL.City city = new DAL.City();
            DAL.School school = new DAL.School();
            child = context.Childs.FirstOrDefault(p => p.IdentityNum == childId);
            family = context.Families.FirstOrDefault(p => p.FamilyId == child.FamilyId);
            school = context.Schools.FirstOrDefault(p => p.SchoolId == child.SchoolId);
            city = context.Cities.FirstOrDefault(p => p.CityId == family.CityId);
            DTO.ChildWithFamilyDetails childWithDetails = new DTO.ChildWithFamilyDetails
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
                SchoolName = school == null ? null : school.SchoolName,
                CityName = city == null ? null : city.CityName
            };
            return childWithDetails;

        }
    }
}
