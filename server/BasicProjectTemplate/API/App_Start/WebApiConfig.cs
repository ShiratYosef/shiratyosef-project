using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Services.Description;

namespace API
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            // config.EnableCors();
            //var enableCorsAttribute = new EnableCorsAttribute("localhost:4200",
            //                            "Origin, X-Requested-With, Content-Type, Accept, Authorization",
            //                         "GET, PUT, POST, DELETE, OPTIONS");
            //config.EnableCors(enableCorsAttribute);

            // Web API routes
            
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
