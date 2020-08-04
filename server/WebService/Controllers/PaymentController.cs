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
    [RoutePrefix("Api/Payment")]
    [EnableCors("*", "*", "*")]
    public class PaymentController : ApiController
    {
        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("GetPaymentByChildId")]
        public HttpResponseMessage GetPaymentsByChildId(string ChildId)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, BLL.Payments.GetPaymentsByChildId(ChildId));
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }

        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("UnPaidSum")]
        public HttpResponseMessage UnPaidSum(string ChildId)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, BLL.Payments.UnPaidSum(ChildId));
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }

        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("PaidSum")]
        public HttpResponseMessage PaidSum(string ChildId)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, BLL.Payments.PaidSum(ChildId));
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }
        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("SavePayment")]
        public HttpResponseMessage SavePayment(DTO.dtoPayment Payment)
        {
            try
            {
                BLL.Payments.SavePayment(Payment);
                return Request.CreateResponse(HttpStatusCode.OK, true);
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }

        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("ReturnCodePayment")]
        public HttpResponseMessage ReturnCodePayment()
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, BLL.Payment.ReturnCodePayment());
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }

        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("calculatePaymentforyear")]
        public HttpResponseMessage calculatePaymentforyear(string ChildId)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, BLL.Payment.calculatePaymentforyear(ChildId));
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }


        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("GetAllPayments")]
        public HttpResponseMessage GetAllPayments()
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, BLL.Payments.GetAllPayments());
            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
            }

        }

    }
}
