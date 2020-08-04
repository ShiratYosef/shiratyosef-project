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

    public partial class dtoTammyValue
    {
        public int TammyValueId { get; set; }
        public string Child { get; set; }
        public System.DateTime TammyDate { get; set; }
        public int CurrentValue { get; set; }
        public static TammyValue castToDal(dtoTammyValue objToCast)
        {
            return new TammyValue()
            {
                TammyValueId=objToCast.TammyValueId,
                Child=objToCast.Child,
                TammyDate=objToCast.TammyDate,
                CurrentValue=objToCast.CurrentValue
            };
        }
        public static dtoTammyValue castToDto(TammyValue objToCast)
        {

            return new dtoTammyValue()
            {
                TammyValueId = objToCast.TammyValueId,
                Child = objToCast.Child,
                TammyDate = objToCast.TammyDate,
                CurrentValue = objToCast.CurrentValue
            };

        }
    }
    
}
