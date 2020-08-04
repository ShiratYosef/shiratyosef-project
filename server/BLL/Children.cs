using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DAL;
namespace BLL
{
    public class Children
    {
        static public TimeTableDevEntities context = new TimeTableDevEntities();
        public static dtoChild GetChildById(string childId)
        {
                return dtoChild.castToDto(context.Childs.FirstOrDefault(p => p.IdentityNum == childId));
        }
        
        public static List<dtoChild> GetChildren()
        {
            //List<dtoChild> children = new List<dtoChild>() ;
            //context.Childs.ToList().ForEach(p => children.Add(dtoChild.castToDto(p)));
            var children = (from child in context.Childs
                           select child).ToList();
            return DTO.dtoChild.castToDto(children);
        }

        public static void SaveChild(dtoChild child)
        {
            Child Newchild = dtoChild.castToDal(child);
            Child ExistChild =context.Childs.FirstOrDefault(p=>p.IdentityNum==Newchild.IdentityNum);
            if(ExistChild != null)
            {
                context.Childs.Remove(ExistChild);
            }
            context.Childs.Add(Newchild);
        }
        public static void DeleteChild(string childId)
        {
           context.Childs.Remove(context.Childs.FirstOrDefault(p => p.IdentityNum == childId));
            
        }
        public static void UpdateChild(dtoChild child)
        {
            Entities.context.Childs.Remove(context.Childs.FirstOrDefault(p => p.IdentityNum == child.IdentityNum));
            Child Newchild = dtoChild.castToDal(child);
            Child ExistChild = context.Childs.FirstOrDefault(p => p.IdentityNum == Newchild.IdentityNum);
            if (ExistChild != null)
            {
                context.Childs.Remove(ExistChild);
            }
            context.Childs.Add(Newchild);

        }
    }
}
