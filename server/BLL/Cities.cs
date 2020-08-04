using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DAL;
namespace BLL
{
   public class Cities
    {
        static public TimeTableDevEntities context = new TimeTableDevEntities();
        public static List<DTO.dtoCity> GetAllCities()
        {
            List<DTO.dtoCity> cities = new List<DTO.dtoCity>();
            context.Cities.ToList().ForEach(p => cities.Add(DTO.dtoCity.castToDto(p)));
            return cities;
        }

        public static void SaveCity(dtoCity city)
        {
            DAL.City NewCity = dtoCity.castToDal(city);
            //School ExistSchool = Entities.context.Schools.FirstOrDefault(p => p.SchoolId == NewSchool.SchoolId);
            //if (ExistSchool != null)
            //{
            //    Entities.context.Schools.Remove(ExistSchool);
            //}
            context.Cities.Add(NewCity);
            context.SaveChanges();
        }

        public static void UpdateCity(dtoCity city)
        {

            var schools =context.Schools.Where(p => p.City == city.CityId);
            foreach (var item in schools)
            {
                item.City = null;
            }
            //Entities.context.Schools.Remove(Entities.context.Schools.FirstOrDefault(p => p.SchoolId == school.SchoolId));
            City NewCity = dtoCity.castToDal(city);
            City ExistCity =context.Cities.FirstOrDefault(p => p.CityId == NewCity.CityId);
            if (ExistCity != null)
            {
                context.Cities.Remove(ExistCity);
                context.SaveChanges();
            }
            context.Cities.Add(NewCity);
            context.SaveChanges();
            foreach (var item in schools)
            {
                item.City = city.CityId;
            }
            context.SaveChanges();

        }
        public static void DeleteCity(int cityId)
        {

            var city = context.Cities.FirstOrDefault(a => a.CityId == cityId);
            var schools =context.Schools.Where(p => p.City == cityId);
            foreach (var item in schools)
            {
                item.City = null;
            }
            context.Cities.Remove(city);
            context.SaveChanges();

        }
    }
}
