using DAL_DBFirst;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Cors;
using System.Web.Mvc;

namespace AppMVC_GUI.Controllers
{
    // [EnableCors(origins: "http://mywebclient.azurewebsites.net", headers: "*", methods: "*")]
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]

    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        [HttpPost]
        [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
        public ActionResult  AddNewAssistance(Assistance newAssistance)
        {
            DAL_DBFirst.FinalProjectsSqlDbEntities context = new FinalProjectsSqlDbEntities();
            context.Assistances.Add(newAssistance);
            context.SaveChanges();
            return Json ( 190);
        }

       [HttpGet]
            public ActionResult AddNewAssistance()
        {
            DAL_DBFirst.FinalProjectsSqlDbEntities context = new FinalProjectsSqlDbEntities();
            //context.Assistances.Add(newAssistance);
            //context.SaveChanges();
            return Json(190);

        }

        [HttpGet ]
        public ActionResult AddNewAssistance1(Assistance newAssistance=null)
        {
            DAL_DBFirst.FinalProjectsSqlDbEntities context = new FinalProjectsSqlDbEntities();
            context.Assistances.Add(newAssistance);
            context.SaveChanges();
            return Json(190);

        }
    }
}