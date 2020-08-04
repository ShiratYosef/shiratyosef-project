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
using DTO;
using System.Web.Routing;

namespace WebService.Controllers
{

    [RoutePrefix("Api/Groups")]
    [EnableCors("*", "*", "*")]
    public class GroupsController : ApiController
    {


        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("GetAllGroups")]
        public HttpResponseMessage GetAllGroups()
        {
            try
            {

                var status = BLL.Groups.GetGroups().ToList();
                return Request.CreateResponse(HttpStatusCode.OK, status);
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }
        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("GetGroupById")]
        public HttpResponseMessage GetGroupById(int GroupId)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, BLL.Groups.GetGroupById(GroupId));
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }

        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("UpdateGroup")]
        public HttpResponseMessage UpdateGroup(DTO.dtoGroup Group)
        {
            try
            {
                BLL.Groups.UpdateGroup(Group);
                return Request.CreateResponse(HttpStatusCode.OK, true);
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }

        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("AddGroup")]
        public HttpResponseMessage AddGroup(DTO.dtoGroup Group)
        {
            try
            {
                BLL.Groups.AddGroup(Group);
                return Request.CreateResponse(HttpStatusCode.OK, true);
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }

        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("GetChildrenByGroupId")]
        public HttpResponseMessage GetChildrenByGroupId(int? GroupId)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, BLL.Groups.GetChildrenByGroupId(GroupId));
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }

        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("AddChildToGroup")]
        public HttpResponseMessage AddChildToGroup(dtoLesson lesson)
        {
            try
            {
                
                BLL.Groups.AddChildToGroup(lesson);
                return Request.CreateResponse(HttpStatusCode.OK, true);
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }

        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("DeleteChildFromGroup")]
        public HttpResponseMessage DeleteChildFromGroup(string childId, int groupId)
        {
            try
            {

                BLL.Groups.DeleteChildFromGroup(childId, groupId);
                return Request.CreateResponse(HttpStatusCode.OK, true);
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }

        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("DeleteGroup")]
        public HttpResponseMessage DeleteGroup(int groupId)
        {
            try
            {
                BLL.Groups.DeleteGroup(groupId);
                return Request.CreateResponse(HttpStatusCode.OK, true);
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }

    }
}
