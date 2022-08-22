using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApiRest.Models
{
    public class Usuario
    {
        public int Token { get; set; }
        public string User { get; set; }
        public string Password { get; set; }
        public int TipoUsuario { get; set; }

        public string Correo { get; set; }
    }
}