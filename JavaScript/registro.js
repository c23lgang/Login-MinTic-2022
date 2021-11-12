var UPB_Tripulantes
console.log(UPB_Tripulantes)

function agregarRegistro(){

    var nombre=document.getElementById('txt_User').value 
    var pass=document.getElementById('txt_Password').value
    var pass=document.getElementById('txt_Edad').value

    var persona={"User":nombre,"Pass":pass, "Edad":Edad}

    UPB_Tripulantes.push(persona)
    console.log(UPB_Tripulantes)
    document.getElementById('txt_User').value=""
    document.getElementById('txt_Password').value=""
    document.getElementById('txt_Edad').value=""

    UPB_Tripulantes.forEach(function(x){
        console.log(x)
        console.log(x.User)
    
    })
}

function login()
{
    location.href='../html/login.html'
}