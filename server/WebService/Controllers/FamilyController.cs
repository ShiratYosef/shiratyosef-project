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
    [RoutePrefix("Api/Families")]
    [EnableCors("*", "*", "*")]
    public class FamilyController : ApiController
    {
        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("GetFamilyById")]
        public HttpResponseMessage GetFamilyById(int FamilyId)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, BLL.Family.GetFamilyById(FamilyId));
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }
        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("SaveFamily")]
        public HttpResponseMessage SaveFamily(DTO.dtoFamily Family)
        {
            try
            {
                BLL.Family.SaveFamily(Family);
                return Request.CreateResponse(HttpStatusCode.OK, true);
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }

        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("GetAllFamilies")]
        public HttpResponseMessage GetAllFamilies()
        {
            try
            {

                var status = BLL.Family.GetAllFamilies().ToList();
                return Request.CreateResponse(HttpStatusCode.OK, status);
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }
        
    }
}
