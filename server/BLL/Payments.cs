using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class Payments
    {
        static public TimeTableDevEntities context = new TimeTableDevEntities();
        public static List<dtoPayment> GetAllPayments()
        {
            List<dtoPayment> payments = new List<dtoPayment>();
            context.Payments.Where(p => p.ChildIdentityNumber != null).ToList().ForEach(p => payments.Add(dtoPayment.castToDto(p)));
            return payments;
        }
        public static List<dtoPayment> GetPaymentsByChildId(string ChildId)
        {
            List<dtoPayment> payments = new List<dtoPayment>();
            context.Payments.Where(p => p.ChildIdentityNumber == ChildId).ToList().ForEach(p => payments.Add(dtoPayment.castToDto(p)));
            return payments;
        }
        public static void SavePayment(dtoPayment payment)
        {
            DAL.Payment NewPayment = dtoPayment.castToDal(payment);
            DAL.Payment ExistPayment = context.Payments.FirstOrDefault(p => p.PaymentId == payment.PaymentId);
            if (ExistPayment != null)
            {
                context.Payments.Remove(ExistPayment);
                context.SaveChanges();
            }
            context.Payments.Add(NewPayment);
            context.SaveChanges();
        }
        public static int? PaidSum(string ChildId)
        {
            int? paidSum = 0;
            List<dtoPayment> payments = new List<dtoPayment>();
            context.Payments.Where(p => p.ChildIdentityNumber == ChildId).ToList().ForEach(p => payments.Add(dtoPayment.castToDto(p)));
            foreach (var item in payments)
            {
                paidSum += item.Sum;
            }
            return paidSum;
        }
        public static double calculatePaymentforyear(string ChildId)
        {
            double d = 10;
            return d;
        }
        public static double UnPaidSum(string ChildId)
        {
            double unPaidSum = 0;
            double sum = calculatePaymentforyear(ChildId);
            int? paid = PaidSum(ChildId);
            //int? con = sum as int?;
            double p = Convert.ToDouble(paid);
            unPaidSum = sum - p;
            return unPaidSum;
        }
    }
}
