using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApiRest.Models
{
    public class Login
    {
        public int Token { get; set; }
        public string User { get; set; }
    }
}