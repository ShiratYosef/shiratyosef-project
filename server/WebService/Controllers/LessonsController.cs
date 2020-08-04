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
    
       [RoutePrefix("Api/Lessons")]
    [EnableCors("*", "*", "*")]
    public class LessonsController : ApiController
    {
        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("GetLessonsByChildId")]
        public HttpResponseMessage GetLessonsByChildId(string childId)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, BLL.Lessons.GetLessonsByChildId(childId));
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }
        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("GetLessonsWithDetaisByChildId")]
        public HttpResponseMessage GetLessonsWithDetaisByChildId(String childId)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, BLL.Lessons.GetLessonsWithDetaisByChildId(childId));
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }
        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("GetLessonsDaysByChildId")]
        public HttpResponseMessage GetLessonsDaysByChildId(string childId)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, BLL.Lessons.GetLessonsDaysByChildId(childId));
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }


        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("GetAllLessons")]
        public HttpResponseMessage GetAllLessons()
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, BLL.Lessons.GetAllLessons());
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }

    }
}
