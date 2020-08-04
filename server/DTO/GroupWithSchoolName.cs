using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
  public class GroupWithSchoolName
    {
        public int code { get; set; }
        public Nullable<int> SchoolId { get; set; }
        public Nullable<int> grade1 { get; set; }
        public Nullable<int> grade2 { get; set; }
        public Nullable<int> TreatmentType { get; set; }
        public string GroupName { get; set; }

        public string SchoolName { get; set; }
    }
}
