// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];

//Funcion para agregar amigos
function agregarAmigo(){
    let agregado= document.getElementById("amigo").value;
    console.log(agregado);
    if(agregado!=""){
        nombresAmigos.push(agregado);
        //Verificar que se esten agregando los nombres
        console.log(nombresAmigos);
        document.getElementById("amigo").value="";
    } else {
        alert("No se ha ingresado un nombre, intente nuevamente.");
    }
}
