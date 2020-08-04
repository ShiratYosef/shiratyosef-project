using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
   public class Family
    {
        static public TimeTableDevEntities context = new TimeTableDevEntities();
        public static List<dtoFamily> GetAllFamilies()
        {
            List<dtoFamily> families = new List<dtoFamily>();
            context.Families.ToList().ForEach(p => families.Add(dtoFamily.castToDto(p)));
            return families;
        }
        public static dtoFamily GetFamilyById(int FamilyId)
        {
            return dtoFamily.castToDto(context.Families.FirstOrDefault(p => p.FamilyId == FamilyId));
        }
        public static List<dtoFamily> GetFamilies()
        {
            List<dtoFamily> Families = new List<dtoFamily>();
            context.Families.ToList().ForEach(p => Families.Add(dtoFamily.castToDto(p)));
            return Families;
        }

        public static void SaveFamily(dtoFamily family)
        {
            DAL.Family NewFamily = DTO.dtoFamily.castToDal(family);
            DAL.Family ExistFamily =context.Families.FirstOrDefault(p => p.FamilyId == NewFamily.FamilyId);
            if (ExistFamily != null)
            {
                context.Families.Remove(ExistFamily);
                context.SaveChanges();
            }
            context.Families.Add(NewFamily);
            context.SaveChanges();

        }

    }
}
