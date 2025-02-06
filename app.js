// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];
let lista=document.getElementById("listaAmigos");//Al ser una variable que se usa mucho, decidi definirla para que la use todo el codigo
//Funcion para agregar amigos
function agregarAmigo(){
    let agregado= document.getElementById("amigo").value;
    console.log(agregado);
    if(agregado!=""){
        nombresAmigos.push(agregado);
        //Verificar que se esten agregando los nombres
        console.log(nombresAmigos);
        document.getElementById("amigo").value="";
        listaDeAmigos(); //De esta forma se llama la funcion cada vez que se agrega un nombre
    } else {
        alert("No se ha ingresado un nombre, intente nuevamente.");
    }
}
//Funcion para enlistar los nombres que se van agregando
function listaDeAmigos(){
    let cantidadDeNombres=nombresAmigos.length;
    console.log("El arreglo tiene: "+cantidadDeNombres+" nombres");
    limpiarLista();
    for(let i=0;i<cantidadDeNombres;i++){
        let nuevoElemento=document.createElement("li");//Crea un elemento de lista
        nuevoElemento.textContent=nombresAmigos[i];
        lista.appendChild(nuevoElemento);//establece que el elemento de lista creado va a estar dentro del elemento al que se asigno la variable lista
    }
}
//Funcion para sortear los nombres
function sortearAmigo(){
    if(nombresAmigos.length!=0){//Condicion para que esta parte del codigo solamente se ejecute cuando hay elementos en el arreglo
        limpiarLista();
        let numeroRandom=Math.floor(Math.random()*nombresAmigos.length);//Esta linea genera un numero aleatorio entre 0 y la cantidad de elementos del arreglo-1
        console.log("El numero "+numeroRandom+" fue generado");//Verificar en la consola que el generador aleatorio este funcionando
        let listaResultado=document.getElementById("resultado");
        listaResultado.innerHTML="El ganador es "+nombresAmigos[numeroRandom];
        console.log("Esta ejecutando como si hubieran elementos");
    } else{
        alert("No hay nombres para sortear, agrega nombres para continuar");
    }
}
//Al ser un comando que se repite, decidi hacer una funcion para limpiar los elementos de la lista
function limpiarLista(){
    lista.innerHTML="";
}