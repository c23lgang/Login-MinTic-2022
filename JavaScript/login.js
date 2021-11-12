var Tripulantes=[{"Nombre":"Admin","Password":"123"}]
console.log(Tripulantes)

function validar_user(){

    var nombre=document.getElementById('txt_User').value 
    var pass=document.getElementById('txt_Password').value
 
    Tripulantes.forEach(function(x){
        if (x.Nombre==nombre && x.Password==pass)
        {
            location.href=''
            sw=true
        }
    })

    if (sw==false)
    {
        alert("El usuario no existe / Credenciales usuario y/o Password incorrectos")
    }
}



function login()
{
    location.href='../html/formulario.html'
}