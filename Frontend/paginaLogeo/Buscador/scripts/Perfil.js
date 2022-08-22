$('#NombreUsuario').ready(function (){    
    $.get("http://www.solwepapirest.somee.com/api/Login")
    .done(function( response ) {
        console.log(response);
        id = response.Token;
        username = response.User;
        nametag.textContent = response.User;
    });

})
let username = null;
let id = null;
let url = null;

const nametag=document.querySelector("#NombreUsuario");
$('#Bodyid').mouseenter(function (){    
    $.get("http://www.solwepapirest.somee.com/api/Registro/" + id)
    .done(function( response ) {
        console.log(response);
        url = "data:image/jpg;base64,"+ response.Foto;
        $("#display_image").css("background-image", "url('" + url.replace(/(\r\n|\n|\r)/gm, "") + "')");
    });

})

$('#logout').click(function(){
    $.ajax({
        method: "DELETE",
        url: "http://www.solwepapirest.somee.com/api/Login/" + id
        })
        .done(function( response ) {
            console.log(response);
            location.href="/Frontend/index.html"
        });
})