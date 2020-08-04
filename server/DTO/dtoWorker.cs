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

    public partial class dtoWorker
    {
        public string IdentityNum { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Kind { get; set; }
        public Nullable<int> DutyCode { get; set; }
        public string Tel { get; set; }
        public string CellPhone { get; set; }
        public Nullable<int> City { get; set; }
        public string Street { get; set; }
        public Nullable<int> HouseNumber { get; set; }
        public Nullable<System.DateTime> BirthDate { get; set; }
        public string Type { get; set; }
        public int Id { get; set; }
        public Nullable<int> RateForFirstYear { get; set; }
        public Nullable<int> RateForNextYear { get; set; }

        public static Worker castToDal(dtoWorker objToCast)
        {
            return new Worker()
            {
                IdentityNum=objToCast.IdentityNum,
                FirstName=objToCast.FirstName,
                LastName=objToCast.LastName,
                Kind=objToCast.Kind,
                DutyCode=objToCast.DutyCode,
                Tel=objToCast.Tel,
                CellPhone=objToCast.CellPhone,
                City=objToCast.City,
                Street=objToCast.Street,
                HouseNumber=objToCast.HouseNumber,
                BirthDate=objToCast.BirthDate,
                Type=objToCast.Type,
                Id=objToCast.Id,
                RateForFirstYear=objToCast.RateForFirstYear,
                RateForNextYear=objToCast.RateForNextYear
            };
        }
        public static dtoWorker castToDto(Worker objToCast)
        {

            return new dtoWorker()
            {
                IdentityNum = objToCast.IdentityNum,
                FirstName = objToCast.FirstName,
                LastName = objToCast.LastName,
                Kind = objToCast.Kind,
                DutyCode = objToCast.DutyCode,
                Tel = objToCast.Tel,
                CellPhone = objToCast.CellPhone,
                City = objToCast.City,
                Street = objToCast.Street,
                HouseNumber = objToCast.HouseNumber,
                BirthDate = objToCast.BirthDate,
                Type = objToCast.Type,
                Id = objToCast.Id,
                RateForFirstYear = objToCast.RateForFirstYear,
                RateForNextYear = objToCast.RateForNextYear

            };

        }
    }
}



