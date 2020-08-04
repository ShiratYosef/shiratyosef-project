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

    [RoutePrefix("Api/Cities")]
    [EnableCors("*", "*", "*")]
    public class CitiesController : ApiController
    {


        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("GetAllCities")]
        public HttpResponseMessage GetAllCities()
        {
            try
            {

                var status = BLL.Cities.GetAllCities().ToList();
                return Request.CreateResponse(HttpStatusCode.OK, status);
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }


        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("SaveCity")]
        public HttpResponseMessage SaveCity(DTO.dtoCity City)
        {
            try
            {
                BLL.Cities.SaveCity(City);
                return Request.CreateResponse(HttpStatusCode.OK, true);
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }

        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("DeleteCity")]
        public HttpResponseMessage DeleteCity(int cityId)
        {
            try
            {
                BLL.Cities.DeleteCity(cityId);
                //List<dtoSchool> schools= BLL.Schools.GetSchools();
                return Request.CreateResponse(HttpStatusCode.OK, true);
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }

        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("UpdateCity")]
        public HttpResponseMessage UpdateCity(DTO.dtoCity city)
        {
            try
            {
                BLL.Cities.UpdateCity(city);
                return Request.CreateResponse(HttpStatusCode.OK, true);
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }
    }
}