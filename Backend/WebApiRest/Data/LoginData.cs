using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MySql.Data.MySqlClient;
using WebApiRest.Models;
using System.Data;

namespace WebApiRest.Data
{
    public class LoginData
    {
        public static bool Registrar(Login oLogin)
        {
            using (MySqlConnection connection = new MySqlConnection(Conexion.ConexionString))
            {
                //Registro de datos
                MySqlCommand cmd = new MySqlCommand("login_registrar", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("id", oLogin.Token);
                cmd.Parameters.AddWithValue("usuario", oLogin.User);
                try
                {
                    connection.Open();
                    cmd.ExecuteNonQuery();
                    return true;
                }
                catch (Exception ex)
                {
                    return false;
                }
                finally { connection.Close(); }

            }

        }

        public static Login Obtener()
        {
            Login oLogin = new Login();
            using (MySqlConnection connection = new MySqlConnection(Conexion.ConexionString))
            {
                MySqlCommand cmd = new MySqlCommand("login_obtener", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                try
                {
                    connection.Open();
                    cmd.ExecuteNonQuery();

                    using (MySqlDataReader dr = cmd.ExecuteReader())
                    {
                        while (dr.Read())
                        {
                            oLogin = new Login()
                            {
                                Token = Convert.ToInt32(dr["Token"]),
                                User = dr["User"].ToString()
                            };
                        }
                    }

                    return oLogin;
                }
                catch (Exception ex)
                {
                    return oLogin;
                }
                finally { connection.Close(); }
            }
        }

        public static bool Eliminar(int token)
        {
            using (MySqlConnection connection = new MySqlConnection(Conexion.ConexionString))
            {
                MySqlCommand cmd = new MySqlCommand("login_eliminar", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("id", token);

                try
                {
                    connection.Open();
                    cmd.ExecuteNonQuery();
                    return true;
                }
                catch (Exception ex)
                {
                    return false;
                }
                finally { connection.Close(); }
            }
        }
    }
}