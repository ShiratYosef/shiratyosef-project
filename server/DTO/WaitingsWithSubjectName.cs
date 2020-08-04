using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
  public class WaitingsWithSubjectName
    {
        public Nullable<int> SubjectId { get; set; }
        public string ChildId { get; set; }
        public int Id { get; set; }
        public Nullable<System.DateTime> RegisterDate { get; set; }
        public Nullable<bool> WaitMode { get; set; }
        public string Comments { get; set; }

        public string SubjectName { get; set; }

    }
}
