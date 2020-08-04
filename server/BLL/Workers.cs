using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DAL;

namespace BLL
{
  public static class Workers
    {
        static public TimeTableDevEntities context = new TimeTableDevEntities();
        public static dtoWorker GetWorkerById(string WorkerId)
        {
            return dtoWorker.castToDto(context.Workers.FirstOrDefault(p => p.IdentityNum == WorkerId));
        }

        public static List<dtoWorker> GetWorkers()
        {
            List<dtoWorker> workers = new List<dtoWorker>();
           context.Workers.ToList().ForEach(p => workers.Add(dtoWorker.castToDto(p)));
            return workers;
        }

        public static void SaveWorker(dtoWorker worker)
        {
            DAL.Worker NewWorker = dtoWorker.castToDal(worker);
            DAL.Worker ExistWorker =context.Workers.FirstOrDefault(p => p.IdentityNum == NewWorker.IdentityNum);
            if (ExistWorker != null)
            {
                context.Workers.Remove(ExistWorker);
            }
            context.Workers.Add(NewWorker);
        }
    }

}
