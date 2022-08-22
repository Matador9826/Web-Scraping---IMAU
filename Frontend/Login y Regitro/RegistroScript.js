$('#btnRegister').click(function () {
    if(validaNombre() && validaApellidos() && validaUsers() && validaSexo() && validaCorreo() && validaPassword() && validaFecha()){

    let data = {
        Nombre : $("#txtnombre").val(),
        Apellidos : $("#txtapellidos").val(),
        User : $("#txtuser").val(),
        Correo : $("#txtcorreo").val(),
        fechadenacimiento: $("#txtfecha").val(),
        Sexo : $("#txtsexo").val(),
        Password : $("#txtPassword").val(),
        Foto : myB64
    }

    $.post("http://www.solwepapirest.somee.com/api/Registro/", data)
    .done(function(response) {
        console.log(response);
        if(response){ 
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: "<h4 style='color:white'>" + 'Registro Exitoso' + "</h4>",
                showConfirmButton: false,
                timer: 2000,
                background: '#222'
              })
            limpiar();
        }else{
        }
    });   
    }
});

function limpiar() {
    $("txtnombre").value = null;
    $("txtapellidos").value = null;
    $("txtuser").value = null;
    $("txtsexo").value = null;
    $("txtcorreo").value = null;
    $("txtPassword").value = null;
    $("txtfecha").value = null;
    $("img_registro").value = null;
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

// VALIDACIONES REGISTRO

function validaNombre(){

    var nombre = document.getElementById('txtnombre').value;

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

    var apellido = document.getElementById('txtapellidos').value;

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

    var user = document.getElementById('txtuser').value;

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

    var sexo = document.getElementById('txtsexo').value;

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

    var correo = document.getElementById('txtcorreo').value;

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
    var password = document.getElementById('txtPassword').value;

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

    var fecha = document.getElementById('txtfecha').value;

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

const image_input=document.querySelector("#img_registro");
var uploaded_image = "";
image_input.addEventListener("change",function(){
    const reader = new FileReader();
    reader.addEventListener("load",()=>{
        uploaded_image=reader.result;
        document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`
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