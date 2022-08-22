using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MySql.Data.MySqlClient;
using WebApiRest.Models;
using System.Data;

namespace WebApiRest.Data
{
    public class UsuarioData
    {
        public static bool Registrar(Usuario oUsuario)
        {
            using (MySqlConnection connection = new MySqlConnection(Conexion.ConexionString))
            {
                //Registro de datos
                MySqlCommand cmd = new MySqlCommand("Usersp_registrar", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("token", oUsuario.Token);
                cmd.Parameters.AddWithValue("user", oUsuario.User);
                cmd.Parameters.AddWithValue("password", oUsuario.Password);
                cmd.Parameters.AddWithValue("tipoUsuario", oUsuario.TipoUsuario);
                cmd.Parameters.AddWithValue("email", oUsuario.Correo);
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

        public static bool Modificar(Usuario oUsuario)
        {
            using (MySqlConnection connection = new MySqlConnection(Conexion.ConexionString))
            {
                MySqlCommand cmd = new MySqlCommand("Usersp_modificar", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("id", oUsuario.Token);
                cmd.Parameters.AddWithValue("user", oUsuario.User);
                cmd.Parameters.AddWithValue("password", oUsuario.Password);
                cmd.Parameters.AddWithValue("email", oUsuario.Correo);

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

        public static List<Usuario> Listar()
        {
            List<Usuario> oListaRegistro = new List<Usuario>();
            using (MySqlConnection connection = new MySqlConnection(Conexion.ConexionString))
            {
                MySqlCommand cmd = new MySqlCommand("Usersp_listar", connection);
                cmd.CommandType = CommandType.StoredProcedure;

                try
                {
                    connection.Open();
                    cmd.ExecuteNonQuery();

                    using (MySqlDataReader dr = cmd.ExecuteReader())
                    {
                        while (dr.Read())
                        {
                            oListaRegistro.Add(new Usuario()
                            {
                                Token = Convert.ToInt32(dr["Token"]),
                                User = dr["User"].ToString(),
                                Password = dr["Password"].ToString(),
                                TipoUsuario = Convert.ToInt32(dr["Tipo_Usuario"]),
                                Correo = dr["Correo"].ToString()
                            });
                        }
                    }
                    return oListaRegistro;
                }
                catch (Exception ex)
                {
                    return oListaRegistro;
                }
                finally { connection.Close(); }

            }
        }

        public static Usuario Obtener(string Usuario, string Password)
        {
            Usuario oUsuario = new Usuario();
            using (MySqlConnection connection = new MySqlConnection(Conexion.ConexionString))
            {
                MySqlCommand cmd = new MySqlCommand("Usersp_obtener", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("email", Usuario);
                cmd.Parameters.AddWithValue("usuario", Usuario);
                cmd.Parameters.AddWithValue("contrasena", Password);
                try
                {
                    connection.Open();
                    cmd.ExecuteNonQuery();

                    using (MySqlDataReader dr = cmd.ExecuteReader())
                    {
                        while (dr.Read())
                        {
                            oUsuario = new Usuario()
                            {
                                Token = Convert.ToInt32(dr["Token"]),
                                User = dr["User"].ToString(),
                                Password = dr["Password"].ToString(),
                                TipoUsuario = Convert.ToInt32(dr["Tipo_Usuario"]),
                                Correo = dr["Correo"].ToString()
                            };
                        }
                    }

                    return oUsuario;
                }
                catch (Exception ex)
                {
                    return oUsuario;
                }
                finally { connection.Close(); }
            }
        }

        public static bool Eliminar(int token)
        {
            using (MySqlConnection connection = new MySqlConnection(Conexion.ConexionString))
            {
                MySqlCommand cmd = new MySqlCommand("Usersp_eliminar", connection);
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