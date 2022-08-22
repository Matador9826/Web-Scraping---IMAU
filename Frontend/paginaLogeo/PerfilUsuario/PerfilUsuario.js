$('#Headid').ready(function (){    
    $.get("http://www.solwepapirest.somee.com/api/Login")
    .done(function( response ) {
        console.log(response);
        id = response.Token;
    });

})

let id = null;
let url = null;
let b64 = null;
$('#Bodyid').one('mouseenter',function (){    
    $.get("http://www.solwepapirest.somee.com/api/Registro/" + id)
    .done(function( response ) {
        console.log(response);
        $("#nombre").val(response.Nombre);
        $("#apellidos").val(response.Apellidos);
        $("#user").val(response.User);
        $("#correo").val(response.Correo);
        $("#sexo").val(response.Sexo);
        $("#Password").val(response.Password);
        $("#fecha").val(response.FechadeNacimiento);
        b64 =response.Foto;
        url = "data:image/jpg;base64,"+ b64;
        $("#perfil_image").css("background-image", "url('" + url.replace(/(\r\n|\n|\r)/gm, "") + "')");
    });

})

$('#btnActualizar').click(function () {
    if(validaNombre() && validaApellidos() && validaUsers() && validaSexo() && validaCorreo() && validaPassword() && validaFecha()){
    
        let fototu = null;
    if(myB64 == null){
    fototu = b64;
    }
    else{
        fototu = myB64;
    }

    let data = {
        Token : id,
        Nombre : $("#nombre").val(),
        Apellidos : $("#apellidos").val(),
        User : $("#user").val(),
        Correo : $("#correo").val(),
        fechadenacimiento: $("#fecha").val(),
        Sexo : $("#sexo").val(),
        Password : $("#Password").val(),
        Foto : fototu
    }

    let data2 = {
        Token : id,
        User : $("#user").val(),
        Correo : $("#correo").val(),
        Password : $("#Password").val()
    }
    $.ajax({
    method:"PUT",
    url:"http://www.solwepapirest.somee.com/api/Registro/",
    contentType: 'application/json',
    data : JSON.stringify(data), //access in body
    })
    .done(function(response) {
        console.log(response);
        if(response){ 
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: "<h4 style='color:white'>" + 'Cambios Exitosos' + "</h4>",
                showConfirmButton: false,
                timer: 2000,
                background: '#222'
              })
            limpiar();
        }else{
        }
    });
    
    
    $.ajax({
        method:"PUT",
        url:"http://www.solwepapirest.somee.com/api/Usuario/",
        contentType: 'application/json',
        data : JSON.stringify(data2), //access in body
        })
        .done(function(response) {
            console.log(response);});
    }
});

function limpiar() {
    
    nombreError.innerHTML = '';
    apellidosError.innerHTML = '';
    userError.innerHTML = '';
    sexoError.innerHTML = '';
    correoError.innerHTML = '';
    passwordError.innerHTML = '';
    fechaError.innerHTML = '';
}


var nombreError = document.getElementById('nombre-error')
var apellidosError = document.getElementById('apellidos-error')
var userError = document.getElementById('user-error')
var sexoError = document.getElementById('sexo-error')
var correoError = document.getElementById('correo-error')
var passwordError = document.getElementById('password-error')
var submitError = document.getElementById('submit-error')
var fechaError = document.getElementById('fecha-error')

var emailLogError = document.getElementById('emailLog-error')
var contrasenaLogError = document.getElementById('contrasenaLog-error')
var submitErrorLog = document.getElementById('submit-errorLog')

// VALIDACIONES REGISTRO

function validaNombre(){

    var nombre = document.getElementById('nombre').value;

    if(nombre.length == 0){
        nombreError.style.display = 'inline-block'
        nombreError.innerHTML = '<i class="bx bx-error bx-tada"></i>';
        // nombreError.style.color = 'rgb(207, 90, 90)';
        setTimeout(function(){nombreError.style.display = 'none';}, 3000);
        return false;
    }

    nombreError.style.display = 'inline-block'
    nombreError.innerHTML = '<i class="bx bxs-check-square"></i>';
    return true;
}

function validaApellidos(){

    var apellido = document.getElementById('apellidos').value;

    if(apellido.length == 0){
        apellidosError.style.display = 'inline-block'
        apellidosError.innerHTML = '<i class="bx bx-error bx-tada" ></i>';
        setTimeout(function(){apellidosError.style.display = 'none';}, 3000);

        return false;
    }
    apellidosError.style.display = 'inline-block'
    apellidosError.innerHTML = '<i class="bx bxs-check-square"></i>';
    return true;
}

function validaUsers(){

    var user = document.getElementById('user').value;

    if(user.length == 0){
        userError.style.display = 'inline-block'
        userError.innerHTML = '<i class="bx bx-error bx-tada" ></i>';
        setTimeout(function(){userError.style.display = 'none';}, 3000);
        return false;
    }
    userError.style.display = 'inline-block'
    userError.innerHTML = '<i class="bx bxs-check-square"></i>';
    return true;
}
function validaSexo(){

    var sexo = document.getElementById('sexo').value;

    if(sexo.length == 0){
        sexoError.style.display = 'inline-block'
        sexoError.innerHTML = '<i class="bx bx-error bx-tada" ></i>';
        setTimeout(function(){sexoError.style.display = 'none';}, 3000);
        return false;
    }
    sexoError.style.display = 'inline-block'
    sexoError.innerHTML = '<i class="bx bxs-check-square"></i>';
    return true;
}

function validaCorreo(){

    var correo = document.getElementById('correo').value;

    if(correo.length == 0){
        correoError.style.display = 'inline-block'
        correoError.innerHTML = '<i class="bx bx-error bx-tada" ></i>';
        setTimeout(function(){correoError.style.display = 'none';}, 3000);
        return false;
    }
    if(!correo.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        correoError.style.display = 'block'
        correoError.innerHTML = "El Correo Introducido no es valido";
        setTimeout(function(){correoError.style.display = 'none';}, 3000);
        return false;
    }
    correoError.style.display = 'inline-block'
    correoError.innerHTML = '<i class="bx bxs-check-square"></i>';
    return true;
}


function validaPassword(){
    var password = document.getElementById('Password').value;

    if(password.length == 0){
        passwordError.style.display = 'inline-block'
        passwordError.innerHTML = '<i class="bx bx-error bx-tada" ></i>';
        setTimeout(function(){passwordError.style.display = 'none';}, 3000);
        return false;
    }
    passwordError.style.display = 'inline-block'
    passwordError.innerHTML = '<i class="bx bxs-check-square"></i>';
    return true;
}

function validaFecha(){

    var fecha = document.getElementById('fecha').value;

    if(fecha.length == 0){
        fechaError.style.display = 'inline-block'
        fechaError.innerHTML = '<i class="bx bx-error bx-tada" ></i>';
        setTimeout(function(){fechaError.style.display = 'none';}, 3000);
        return false;
    }

    fechaError.style.display = 'inline-block'
    fechaError.innerHTML = '<i class="bx bxs-check-square"></i>';
    return true;
}

function validaform(){

    if(!validaNombre() && !validaApellidos() && !validaUsers() && !validaSexo() && !validaCorreo() && !validaPassword() && !validaFecha()){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: "<h4 style='color:white'>" + 'Error al Ingresar los Datos' + "</h4>",
            showConfirmButton: false,
            timer: 2000,
            background: '#222'
          })
        return false;
    }

}

// VALIDACIONES LOGIN
function valida_user_log(){

    var emailLog = document.getElementById('txtemail').value;

    if(emailLog.length == 0){
        emailLogError.style.display = 'inline-block'
        emailLogError.innerHTML = '<i class="bx bx-error bx-tada" ></i>';
        setTimeout(function(){emailLogError.style.display = 'none';}, 3000);
        return false;
    }

    emailLogError.innerHTML = '';
    return true;
}
function valida_contrasena_log(){

    var contrasenaLog = document.getElementById('txtcontrasena').value;

    if(contrasenaLog.length == 0){
        contrasenaLogError.style.display = 'inline-block'
        contrasenaLogError.innerHTML = '<i class="bx bx-error bx-tada" ></i>';
        setTimeout(function(){contrasenaLogError.style.display = 'none';}, 3000);
        return false;
    }

    contrasenaLogError.innerHTML = '';
    return true;
}
function validaformLog(){

    if(!valida_user_log() && !valida_contrasena_log()){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: "<h4 style='color:white'>" + 'Usuario Incorrecto' + "</h4>",
            showConfirmButton: false,
            timer: 2000,
            background: '#222'
          })
        return false;
    }

}

const image_input=document.querySelector("#img_perfil");
var uploaded_image = "";
image_input.addEventListener("change",function(){
    const reader = new FileReader();
    reader.addEventListener("load",()=>{
        uploaded_image=reader.result;
        document.querySelector("#perfil_image").style.backgroundImage = `url(${uploaded_image})`
    });
    reader.readAsDataURL(this.files[0]);
})

//Funcion que convierte el archivo de la imagen de blob a base64
const blobToBase64 = (blob) => {
    return new Promise( (resolve, reject) =>{
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
            resolve(reader.result.split(',')[1]);
            // "data:image/jpg;base64,=sdCXDSAsadsadsa"
        };
    });
};

//Funcion que convierte el texto base64 a blob
let myB64 = null;
image_input.addEventListener('change', async (e) => {
    const myBlob = image_input.files[0];
    myB64 = await blobToBase64(myBlob);
});