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
    [RoutePrefix("api/login")]
    public class LoginController : ApiController
    {
        // GET api/<controller>


        // GET api/<controller>/"Admin"/"Password"
        public Login Get()
        {
            return LoginData.Obtener();
        }

        // POST api/<controller>
        public bool Post([FromBody] Login oLogin)
        {
            return LoginData.Registrar(oLogin);
        }

        // PUT api/<controller>/5
        public bool Put([FromBody] Usuario oUsuario)
        {
            return UsuarioData.Modificar(oUsuario);
        }

        // DELETE api/<controller>/5
        public bool Delete(int id)
        {
            return LoginData.Eliminar(id);
        }
    }
}