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

    [RoutePrefix("Api/Children")]
    [EnableCors("*", "*", "*")]
    public class ChildrenController : ApiController
    {
        
       
        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("GetAllChildren")]
        public HttpResponseMessage GetAllChildren()
        {
            try
            {

               var status = BLL.Children.GetChildren().ToList();
                return Request.CreateResponse(HttpStatusCode.OK, status);
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }
        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("GetChildById")]
        public HttpResponseMessage GetChildById(string childId)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, BLL.Children.GetChildById(childId));
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }
        
        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("SaveChild")]
        public HttpResponseMessage SaveChild(DTO.dtoChild child)
        {
            try
            {
                BLL.Children.SaveChild(child);
                return Request.CreateResponse(HttpStatusCode.OK, true);
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }
        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("DeleteChild")]
        public HttpResponseMessage DeleteChild(string childId)
        {
            try
            {
                BLL.Children.DeleteChild(childId);
                return Request.CreateResponse(HttpStatusCode.OK, true);
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }
        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("UpdateChild")]
        public HttpResponseMessage UpdateChild(DTO.dtoChild child)
        {
            try
            {
                BLL.Children.UpdateChild(child);
                return Request.CreateResponse(HttpStatusCode.OK, true);
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }
        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("GetAllChildrenWithDetails")]
        public HttpResponseMessage GetAllChildrenWithDetails()
        {
            try
            {
                var status = BLL.ChildrenWithFamilydetails.GetAllChildrenWithDetails().ToList();
                return Request.CreateResponse(HttpStatusCode.OK, status);

            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }
        }

        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("AddChildrenWithDetails")]
        public HttpResponseMessage AddChildrenWithDetails(ChildWithFamilyDetails child)
        {
            try
            {
                BLL.ChildrenWithFamilydetails.AddChildrenWithDetails(child);
                return Request.CreateResponse(HttpStatusCode.OK, true);
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }

        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("UpdateChildrenWithDetails")]
        public HttpResponseMessage UpdateChildrenWithDetails(ChildWithFamilyDetails child)
        {
            try
            {
                BLL.ChildrenWithFamilydetails.UpdateChildrenWithDetails(child);
                return Request.CreateResponse(HttpStatusCode.OK, true);
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }

        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("DeleteChildrenWithDetails")]
        public HttpResponseMessage DeleteChildrenWithDetails(string childId)
        {
            try
            {
                BLL.ChildrenWithFamilydetails.DeleteChildrenWithDetails(childId);
                return Request.CreateResponse(HttpStatusCode.OK, true);
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }

        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("GetChildWithDetailsById")]
        public HttpResponseMessage GetChildWithDetailsById(string childId)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, BLL.ChildrenWithFamilydetails.GetChildWithDetailsById(childId));
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }
    }
}