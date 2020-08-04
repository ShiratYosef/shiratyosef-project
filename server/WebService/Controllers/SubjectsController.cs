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

    [RoutePrefix("Api/Subjects")]
    [EnableCors("*", "*", "*")]
    public class SubjectsController : ApiController
    {


        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("GetAllSubjects")]
        public HttpResponseMessage GetAllSubjects()
        {
            try
            {

                var status = BLL.Subjects.GetAllSubjects().ToList();
                return Request.CreateResponse(HttpStatusCode.OK, status);
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }
        

        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("SaveSubject")]
        public HttpResponseMessage SaveSubject(DTO.dtoSubject Subject)
        {
            try
            {
                BLL.Subjects.SaveSubject(Subject);
                return Request.CreateResponse(HttpStatusCode.OK, true);
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }

        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("DeleteSubject")]
        public HttpResponseMessage DeleteSubject(int subjectId)
        {
            try
            {
                BLL.Subjects.DeleteSubject(subjectId);
                //List<dtoSchool> schools= BLL.Schools.GetSchools();
                return Request.CreateResponse(HttpStatusCode.OK, true);
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }

        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("UpdateSubject")]
        public HttpResponseMessage UpdateSubject(DTO.dtoSubject subject)
        {
            try
            {
                BLL.Subjects.UpdateSubject(subject);
                return Request.CreateResponse(HttpStatusCode.OK, true);
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }
    }
}