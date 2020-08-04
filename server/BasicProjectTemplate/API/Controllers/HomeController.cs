using DAL_DBFirst;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Cors;
using System.Web.Mvc;


namespace API.Controllers
{
   // [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

         //  [EnableCors(origins: "*", headers: "*", methods: "*")]
        [HttpPost]
        public ActionResult AddNewAssistance(Assistance newAssistance)
        {
            DAL_DBFirst.FinalProjectsSqlDbEntities context = new FinalProjectsSqlDbEntities();
            context.Assistances.Add(newAssistance);
            context.SaveChanges();
            return Json(newAssistance.ID );

        }
        [HttpGet]
        public ActionResult AddNewAssistance()
        {
            DAL_DBFirst.FinalProjectsSqlDbEntities context = new FinalProjectsSqlDbEntities();
            //context.Assistances.Add(newAssistance);
            //context.SaveChanges();
            return Json(190,JsonRequestBehavior.AllowGet);

        }

        [HttpGet]
        public ActionResult AddNewAssistance1(Assistance newAssistance = null)
        {
            DAL_DBFirst.FinalProjectsSqlDbEntities context = new FinalProjectsSqlDbEntities();
            context.Assistances.Add(newAssistance);
            context.SaveChanges();
            return Json(190);

        }
    }
}
