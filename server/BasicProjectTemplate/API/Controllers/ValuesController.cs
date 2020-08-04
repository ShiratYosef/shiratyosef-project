using DAL_DBFirst;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
//using System.Web.Http;
using System.Web.Mvc;

namespace API.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/values
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }
        // [EnableCors(origins: "*", headers: "*", methods: "*",PreflightMaxAge =600,SupportsCredentials =false  )]
        // [EnableCors(origins: "http://localhost:4200/", headers: "*", methods: "*")]
        // [EnableCors("AllowAllOrigins")]
        // [EnableCors(origins: "*", headers: "*", methods: "*")]

        // [HttpPost]
        // [HttpOptions] //this was the key
        // [Authorize]
        // POST api/values
        public string  Post([FromBody]Assistance assistance)
        {
            DAL_DBFirst.FinalProjectsSqlDbEntities context = new FinalProjectsSqlDbEntities();
           // context.Assistances.Add(assistance );
           // context.SaveChanges();
            return  "aaaaa" ;
         }

        // PUT api/values/5
      //  [EnableCors(origins: "*", headers: "*", methods: "*", PreflightMaxAge = 600, SupportsCredentials = false )]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
