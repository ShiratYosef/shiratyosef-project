using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
  public  class SchoolWithCityName
    {
        public int SchoolId { get; set; }
        public string SchoolName { get; set; }
        public Nullable<int> City { get; set; }
        public string Address { get; set; }
        public string Telephon { get; set; }

        public string CityName { get; set; }
    }
}
