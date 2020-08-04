using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DAL;
namespace BLL
{
   public class Payment
    {
        static public TimeTableDevEntities context = new TimeTableDevEntities();
        static public int CurrentYear = DateTime.Now.Year;
        static public DateTime FirstDayOfYear = new DateTime(1, 1, CurrentYear);
        static public DateTime LastDayOfYear = new DateTime(12, 30, CurrentYear);
        public const int WeeksInYear = 52;
        public const int WeeksInMonth = 4;
        public static List<dtoPayment> GetPaymentsByChildId(string ChildId)
        {
            List<dtoPayment> payments = new List<dtoPayment>();
            context.Payments.Where(p => p.ChildIdentityNumber == ChildId).ToList().ForEach(p => payments.Add(dtoPayment.castToDto(p)));
            return payments;
        }
        public static void SavePayment(dtoPayment payment)
        {
            DAL.Payment NewPayment = dtoPayment.castToDal(payment);
            DAL.Payment ExistPayment =context.Payments.FirstOrDefault(p => p.PaymentId == payment.PaymentId);
            if (ExistPayment != null)
            {
                context.Payments.Remove(ExistPayment);
                context.SaveChanges();
            }
            context.Payments.Add(NewPayment);
            context.SaveChanges();
        }
        public static int ReturnCodePayment()
        {
            DAL.Payment payment = new DAL.Payment();
           var newPayment=context.Payments.Add(payment);
            context.SaveChanges();
            return newPayment.PaymentId;
        }
      public static double calculatePaymentforyear(string ChildId)
        {
            DateTime FirstLessonDate;
            DateTime LastLessonDate;
            double weeks = 0;
            double SumWeeks = 0;
            double SumPayment;
            List<Lesson> currentLessons = context.Lessons
                .Where(p => p.ChildId == ChildId).ToList();    
            foreach (Lesson lesson in currentLessons)
            {
                FirstLessonDate = lesson.FromDate==null ? lesson.FromDate.Value : FirstDayOfYear;
                LastLessonDate = lesson.EndDate==null ? lesson.EndDate.Value : LastDayOfYear;
                weeks = (Convert.ToInt32(LastLessonDate) - Convert.ToInt32(FirstLessonDate)) / 7;
                weeks= weeks == WeeksInYear ? weeks - WeeksInMonth : weeks;
                SumWeeks += weeks;
            }
           return SumPayment = SumWeeks * 150;
        }
        public static List<dtoPayment> GetAllPayments()
        {
            List<dtoPayment> payments = new List<dtoPayment>();
            context.Payments.Where(p => p.ChildIdentityNumber != null).ToList().ForEach(p => payments.Add(dtoPayment.castToDto(p)));
            return payments;
        }
        public static int? PaidSum(string ChildId)
        {
            int? paidSum = 0;
            List<dtoPayment> payments = new List<dtoPayment>();
            context.Payments.Where(p => p.ChildIdentityNumber == ChildId).ToList().ForEach(p => payments.Add(dtoPayment.castToDto(p)));
            foreach(var item in payments)
            {
                paidSum += item.Sum;
            }
            return paidSum;
        }
        public static double UnPaidSum(string ChildId)
        {
            double unPaidSum = 0;
           double sum=calculatePaymentforyear(ChildId);
            int? paid = PaidSum(ChildId);
            //int? con = sum as int?;
            double p = Convert.ToDouble(paid);
            unPaidSum = sum - p;
            return unPaidSum;
        }
    }
}
