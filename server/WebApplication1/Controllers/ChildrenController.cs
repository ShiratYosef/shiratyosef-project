using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    
     

    public class ChildrenController : Controller
    {
        // GET: Children
        public ActionResult Index()
        {
            return View("hello");
        }
    }
}