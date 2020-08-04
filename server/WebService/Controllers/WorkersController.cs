using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using DAL;
using System.Web.Mvc;
using System.Web.Http.Cors;
using RoutePrefixAttribute = System.Web.Http.RoutePrefixAttribute;

namespace WebService.Controllers
{
    [RoutePrefix("Api/Worker")]
    [EnableCors("*", "*", "*")]
    public class WorkersController : ApiController
    {

        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("GetWorkers")]
        public HttpResponseMessage GetWorkers()
        {
            try
            {

                var status = BLL.Workers.GetWorkers().ToList();
                return Request.CreateResponse(HttpStatusCode.OK, status);
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }
        }
    }
}