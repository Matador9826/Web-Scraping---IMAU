$('#btnLogin').click(function (){    
    $.get("http://www.solwepapirest.somee.com/api/Usuario/" + document.getElementById("txtemail").value 
    + "/" + document.getElementById("txtcontrasena").value)
    .done(function( response ) {
        console.log(response);
        
        if(response.User != null && response.Password != null){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: "<h4 style='color:white'>" + 'Bienvenido' + "</h4>",
                showConfirmButton: false,
                background: '#222'
              })
            $("#nombre").val(response.Nombre);
    let data =
        {   token : response.Token,
        user : response.User
        } 
        $.post("http://www.solwepapirest.somee.com/api/Login/",data);

        delayRedirect(); //es lo mismo que abajo solo que se toma un tiempo para redireccionar la pagina para que aparezca la alerta 
        // location.href="../PaginaPrincipal/PerfilUsuario.html";
        }
        else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: "<h4 style='color:white'>" + 'Usuario Incorrecto' + "</h4>",
                showConfirmButton: false,
                timer: 2000,
                background: '#222'
              })
            limpiarLog();
        }
    });

})

function limpiarLog() {
    document.getElementById("txtemail").value = "";
    document.getElementById("txtcontrasena").value = "";

}

var emailLogError = document.getElementById('emailLog-error')
var contrasenaLogError = document.getElementById('contrasenaLog-error')
var submitErrorLog = document.getElementById('submit-errorLog')

// VALIDACIONES LOGIN
function valida_user_log(){

    var emailLog = document.getElementById('txtemail').value;

    if(emailLog.length == 0){
        emailLogError.style.display = 'inline-block'
        emailLogError.innerHTML = '<i class="bx bx-error bx-tada" ></i>';
        setTimeout(function(){emailLogError.style.display = 'none';}, 3000);
        return false;
    }

    emailLogError.style.display = 'inline-block'
    emailLogError.innerHTML = '<i class="bx bxs-check-square"></i>';
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
    contrasenaLogError.style.display = 'inline-block'
    contrasenaLogError.innerHTML = '<i class="bx bxs-check-square"></i>';
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

//  Funcion para la redireccion tardia del login cuando el usuario ingresa. (Para poder mostrar la alerta, sin esto la alerta no se muestra)
function delayRedirect(){
    var count = 5;
    setInterval(function(){
        count--;
        if (count == 0) {
            location.href="../paginaLogeo/Buscador/pag-sheare.html";
        }
    },300);
}