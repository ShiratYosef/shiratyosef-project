using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;

namespace DTO
{

    public partial class dtoBank
    {
        
        public int BankId { get; set; }
        public string BankName { get; set; }
        public static Bank castToBank(dtoBank dtbank)
        {
            return new Bank() { BankId = dtbank.BankId, BankName = dtbank.BankName };
        }
        public static dtoBank castToDtoBank(Bank bank)
        {
            return new dtoBank() { BankId = bank.BankId, BankName = bank.BankName };

        }
        

    }
}
