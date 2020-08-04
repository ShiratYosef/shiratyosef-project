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
using DTO;
using System.Web.Mvc;
using System.Web.Http.Cors;
using RoutePrefixAttribute = System.Web.Http.RoutePrefixAttribute;



namespace WebService.Controllers
{
    [RoutePrefix("Api/School")]
    [EnableCors("*", "*", "*")]
    public class SchoolController : ApiController
    {
        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("GetAllSchools")]
        public HttpResponseMessage GetAllSchools()
        {
            try
            {

                var status = BLL.Schools.GetSchools().ToList();
                return Request.CreateResponse(HttpStatusCode.OK, status);
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }

        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("SaveSchool")]
        public HttpResponseMessage SaveSchool(DTO.dtoSchool school)
        {
            try
            {

               BLL.Schools.SaveSchool(school);
                return Request.CreateResponse(HttpStatusCode.OK,true);
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }

        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("UpdateSchool")]
        public HttpResponseMessage UpdateSchool(DTO.dtoSchool school)
        {
            try
            {
                BLL.Schools.UpdateSchool(school);
                return Request.CreateResponse(HttpStatusCode.OK, true);
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }

        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("DeleteSchool")]
        public HttpResponseMessage DeleteSchool(int schoolId)
        {
            try
            {
                BLL.Schools.DeleteSchool(schoolId);
               //List<dtoSchool> schools= BLL.Schools.GetSchools();
                return Request.CreateResponse(HttpStatusCode.OK, true);
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }
    }

    
}

