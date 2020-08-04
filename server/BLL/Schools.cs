using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;

using DAL;
namespace BLL
{
  public  class Schools
    {
        static public TimeTableDevEntities context = new TimeTableDevEntities();
        public static List<SchoolWithCityName> GetSchools()
        {
            List<SchoolWithCityName> schools = new List<SchoolWithCityName>();
            schools = (from school in context.Schools
                       join city1 in context.Cities
                       on school.City equals city1.CityId into newcities
                       from city in newcities.DefaultIfEmpty()
                       select new SchoolWithCityName
                       {
                           SchoolId=school.SchoolId,
                           SchoolName=school.SchoolName,
                           City=school.City,
                           Address=school.Address,
                           Telephon=school.Telephon,
                           CityName=city==null?null:city.CityName

                       }).ToList();
            return schools;
        }
        public static void SaveSchool(dtoSchool school)
        {
            School NewSchool = dtoSchool.castToDal(school);
            //School ExistSchool = Entities.context.Schools.FirstOrDefault(p => p.SchoolId == NewSchool.SchoolId);
            //if (ExistSchool != null)
            //{
            //    Entities.context.Schools.Remove(ExistSchool);
            //}
            context.Schools.Add(NewSchool);
            context.SaveChanges();
        }
        public static void UpdateSchool(dtoSchool school)
        {
            var children =context.Childs.Where(p => p.SchoolId == school.SchoolId);
            foreach (var item in children)
            {
                item.SchoolId = null;
            }
            //Entities.context.Schools.Remove(Entities.context.Schools.FirstOrDefault(p => p.SchoolId == school.SchoolId));
            School Newschool = dtoSchool.castToDal(school);
            School ExistSchool =context.Schools.FirstOrDefault(p => p.SchoolId == Newschool.SchoolId);
            if (ExistSchool != null)
            {
                context.Schools.Remove(ExistSchool);
                context.SaveChanges();
            }
            context.Schools.Add(Newschool);
            context.SaveChanges();
            foreach (var item in children)
            {
                item.SchoolId = school.SchoolId;
            }
            context.SaveChanges();

        }
        public static void DeleteSchool(int schoolId)
        {

            var school = context.Schools.FirstOrDefault(a => a.SchoolId == schoolId);
            var children = context.Childs.Where(p => p.SchoolId == schoolId);
            foreach (var item in children)
            {
                item.SchoolId = null;
            }
            context.Schools.Remove(school);
            context.SaveChanges();
         
        }
    }
}
