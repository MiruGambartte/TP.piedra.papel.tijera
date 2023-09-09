
console.log("hola mundo")
let puntos_jugador = 0;
let puntos_PC= 0;

let Puntos_usuario= document.querySelector("#puntos_jugador");
let Puntos_Computadora= document.querySelector("#puntos_computadora");

let mensaje= document.querySelector("#mensaje");
let ganador= document.querySelector("#ganador");
let ContenedorEleccionPC = document.querySelector("#eleccionPC");
let ContenedorEleccion_usuario = document.querySelector("#eleccion_usuario");
let Botons_3= document.querySelector("#botones");
let reiniciar= document.querySelector("#reiniciar");


let botones=document.querySelectorAll(".boton");
botones.forEach(boton => {
    boton.addEventListener("click", PlayRound);  
});
function PlayRound(e){
    let EleccionPC = Math.floor(Math.random() *3);
    let Eleccion_usuario = e.currentTarget.id;
   
    if(EleccionPC == 0){
       EleccionPC= "piedra";
    }else if(EleccionPC ==1){
        EleccionPC="papel";
    }else{
        EleccionPC= "tijera";
    }
    
    if(
        (Eleccion_usuario == "piedra" && EleccionPC== "tijera") || 
        (Eleccion_usuario == "tijera" && EleccionPC=="papel" ) || 
        (Eleccion_usuario == "papel" && EleccionPC== "piedra")
    ){
        ganaUsuario();

    }else if(
        (EleccionPC == "piedra" && Eleccion_usuario== "tijera") || 
        (EleccionPC == "tijera" && Eleccion_usuario=="papel" ) || 
        (EleccionPC == "papel" && Eleccion_usuario== "piedra")
    ){
        ganaPC();
    }else{
        empate();
        
    }
    ContenedorEleccion_usuario.innerText = Eleccion_usuario
    ContenedorEleccionPC.innerText= EleccionPC;

    if (puntos_jugador==5 || puntos_PC==5){
        if(puntos_jugador==5){
            ganador.innerText="Ganaste"
        }
        if (puntos_PC==5){
            ganador.innerText="Gano la computadora"
        }
        Botons_3.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click",reiniciarJuego);
    }
    
}
    
function ganaUsuario(){
        puntos_jugador++;
        Puntos_usuario.innerText = puntos_jugador;
}

function ganaPC(){
        puntos_PC++;
        Puntos_Computadora.innerText = puntos_PC;
}

function empate(){
}

function reiniciarJuego(){
    puntos_jugador= 0;
    puntos_PC= 0;
    Puntos_usuario.innerText = puntos_jugador;
    Puntos_Computadora.innerText = puntos_PC;
    Botons_3.classList.remove("disabled");
    reiniciar.classList.add("disabled");
    ganador.innerText="";
}
        
    

