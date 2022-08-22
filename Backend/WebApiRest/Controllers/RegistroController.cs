using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApiRest.Data;
using WebApiRest.Models;

namespace WebApiRest.Controllers
{
    [RoutePrefix("api/registro")]
    public class RegistroController : ApiController
    {
        // GET api
        public List<Registro> Get()
        {
            return RegistroData.Listar();
        }

        // GET api
        [Route("{id}")]
        public Registro Get(int id)
        {
            return RegistroData.Obtener(id);
        }

        // POST api
        public bool Post([FromBody] Registro oregistro)
        {
            return RegistroData.Registrar(oregistro);
        }

        // PUT api
        public bool Put([FromBody] Registro oregistro)
        {
            return RegistroData.Modificar(oregistro);
        }

        // DELETE api
        [Route("{ID:int}")]
        public bool Delete(int id)
        {
            return RegistroData.Eliminar(id);           
        }
    }
}