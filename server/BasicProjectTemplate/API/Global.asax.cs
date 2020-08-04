using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace API
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
        [System.Web.Http.HttpPost]
        [System.Web.Http.HttpOptions] //this was the key
        [System.Web.Http.Authorize]
        // [EnableCors(origins: "*", headers: "*", methods: "*")]
        protected void Application_BeginRequest()
        {
           // HttpContext context= HttpContext.Current;
            //if (context.Request.HttpMethod == "OPTIONS")
            //{
            //    context.Response.Headers.Add("Access-Control-Allow-Origin", "Origin" );
            //    context.Response.Headers.Add("Access-Control-Allow-Headers",  "Origin, X-Requested-With, Content-Type, Accept, Authorization" );
            //    context.Response.Headers.Add("Access-Control-Allow-Methods",  "GET, POST, PUT, DELETE, OPTIONS" );
            //    context.Response.Headers.Add("Access-Control-Allow-Credentials",   "true" );

            //}
            //context.Response.Headers.Add ("Access-Control-Allow-Origin", "*");
            //    context.Response.Headers.Add("Access-Control-Allow-Credentials", "true");
            //    context.Response.Headers.Add("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
            //context.Response.Headers.Add("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

            //if (Request.Headers.AllKeys.Contains("Origin") && Request.HttpMethod == "OPTIONS")
            //{
            //    Response.Flush();
            //}
        }
    }
}
