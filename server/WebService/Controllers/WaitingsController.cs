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
    [RoutePrefix("Api/Waitings")]
    [EnableCors("*", "*", "*")]
    public class WaitingsController : ApiController
    {
        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("GetWaitingsByChildId")]
        public HttpResponseMessage GetWaitingsByChildId(String childId)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, BLL.Waitings.GetWaitingsByChildId(childId));
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }

        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("GetAllWitings")]
        public HttpResponseMessage GetAllWitings()
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, BLL.Waitings.GetAllWitings());
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }
        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("SaveWaiting")]
        public HttpResponseMessage SaveWaiting(DTO.dtoChildRegistrationToSubject Waiting)
        {
            try
            {
                BLL.Waitings.SaveWaiting(Waiting);
                return Request.CreateResponse(HttpStatusCode.OK,true );
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }
        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("AddWaitingChild")]
        public HttpResponseMessage AddWaitingChild(DTO.dtoChildRegistrationToSubject child)
        {
            try
            {
                BLL.Waitings.AddWaitingChild(child);
                return Request.CreateResponse(HttpStatusCode.OK, true);
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }

        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("DeleteWaitingByObj")]
        public HttpResponseMessage DeleteWaitingByObj(DTO.dtoChildRegistrationToSubject child)
        {
            try
            {
                BLL.Waitings.DeleteWaitingByObj(child);
                return Request.CreateResponse(HttpStatusCode.OK, true);
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }

        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("GetWaitingsChildrenBySubjectId")]
        public HttpResponseMessage GetWaitingsChildrenBySubjectId(int? SubjectId)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, BLL.Waitings.GetWaitingsChildrenBySubjectId(SubjectId));
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }
        
         [System.Web.Http.HttpGet]
        [System.Web.Http.Route("getWaitingByChildId")]
        public HttpResponseMessage getWaitingByChildId(string childId)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, BLL.Waitings.getWaitingByChildId(childId));
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }

        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("MaxWitingsForSubject")]
        public HttpResponseMessage MaxWitingsForSubject()
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, BLL.Waitings.MaxWitingsForSubject());
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }
    }

}
