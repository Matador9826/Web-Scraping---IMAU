using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApiRest.Models
{
    public class Registro
    {
        public int Token { get; set; }
        public string Nombre { get; set; }
        public string Apellidos { get; set; }
        public string User { get; set; }
        public string Password { get; set; }
        public string FechadeNacimiento { get; set; }
        public string Correo { get; set; }
        public string Sexo { get; set; }
        public string Foto { get; set;}

    }
}