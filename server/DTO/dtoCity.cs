using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class dtoCity
    {
        public int CityId { get; set; }
        public string CityName { get; set; }

       
      

    
    public static City castToDal(dtoCity objToCast)
    {
        using (TimeTableDevEntities db = new TimeTableDevEntities())
        {


            return new City()
            {
                CityId=objToCast.CityId,
                CityName=objToCast.CityName

            };
        }
    }
    public static dtoCity castToDto(City objToCast)
    {
        using (TimeTableDevEntities db = new TimeTableDevEntities())
        {


            return new dtoCity()
            {
                CityId = objToCast.CityId,
                CityName = objToCast.CityName

            };
        }
    }
}
}
