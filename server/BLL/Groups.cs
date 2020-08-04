using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DAL;
namespace BLL
{
    public class Groups
    {
        static public TimeTableDevEntities context = new TimeTableDevEntities();
        public static dtoGroup GetGroupById(int GroupId)
        {
            return dtoGroup.castToDto(context.Groups.FirstOrDefault(p => p.code == GroupId));
        }
        public static List<GroupWithSchoolName> GetGroups()
        {
            List<GroupWithSchoolName> Groups = new List<GroupWithSchoolName>();
            //context.Groups.ToList().ForEach(p => Groups.Add(dtoGroup.castToDto(p)));
            Groups = (from group1 in context.Groups
                      join school in context.Schools
                      on group1.SchoolId equals school.SchoolId into newschools
                      from school1 in newschools.DefaultIfEmpty()
                      select new GroupWithSchoolName
                      {
                          code = group1.code,
                          SchoolId=group1.SchoolId,
                          grade1=group1.grade1,
                          grade2=group1.grade2,
                          TreatmentType=group1.TreatmentType,
                          GroupName=group1.GroupName,
                          SchoolName= school1==null?null:school1.SchoolName
                      }).ToList();
            return Groups;
        }

        public static void UpdateGroup(dtoGroup Group)
        {
            Group NewGroup = dtoGroup.castToDal(Group);
            Group ExistGroup =context.Groups.FirstOrDefault(p => p.code == NewGroup.code);
            if (ExistGroup != null)
            {
                ExistGroup.code=Group.code;
                ExistGroup.GroupName = Group.GroupName;
                ExistGroup.grade1 = Group.grade1;
                ExistGroup.grade2 = Group.grade2;
                ExistGroup.SchoolId = Group.SchoolId;
                context.SaveChanges();
            }

        }
        public static void AddGroup(dtoGroup Group)
        {
            context.Groups.Add(dtoGroup.castToDal(Group));
            context.SaveChanges();
        }
        public static List<dtoChild> GetChildrenByGroupId(int? GroupId)
        {
            List<dtoChild> Groups = new List<dtoChild>();
            context.Childs.ToList().Where(p => p.Groups.FirstOrDefault(q => q.code== GroupId) != null).ToList().ForEach(q => Groups.Add(dtoChild.castToDto(q)));
            return Groups;
        }

        public static void AddChildToGroup(dtoLesson lesson)
        {
            context.Lessons.Add(dtoLesson.castToDal(lesson));
            context.SaveChanges();
            var child = context.Childs.FirstOrDefault(p => p.IdentityNum == lesson.ChildId);
            var group= context.Groups.FirstOrDefault(p => p.code == lesson.GroupId);
            group.Childs.Add(child);
            context.SaveChanges();
        }

        public static void DeleteChildFromGroup(string childId, int groupId)
        {
            Child child = context.Childs.FirstOrDefault(p => p.IdentityNum == childId);
            context.Groups.FirstOrDefault(p => p.code == groupId).Childs.Remove(child);
            context.SaveChanges();
        }
        public static bool DeleteGroup(int groupId)
        {
            var group = context.Groups.FirstOrDefault(a => a.code == groupId);
            List<Lesson>lessons = context.Lessons.Where(p => p.GroupId == groupId).ToList();
            foreach (var item in lessons)
            {
                context.Lessons.Remove(item);
                context.SaveChanges();
            }
            //var children = group.Childs;
            //if (children.Count != 0)
            //    return false;
            context.Groups.Remove(group);
            context.SaveChanges();
            return true;
        }

    }
}
