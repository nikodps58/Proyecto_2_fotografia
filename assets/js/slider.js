/* DECLARACION DE VARIABLES */
var numfotos = 12;  /* numero de fotos */
var ordenprincipal, ordensiguiente;
var intervalo;
var tiempoespera = 2000;

const flechaizd = document.getElementById("flechaizd");
const flechader = document.getElementById("flechader");
const fotoactiva = document.getElementById("fotoactiva");
/*
console.log(flechaizd);
console.log(flechader);
console.log(fotoactiva);
*/

/* ACCIONES DE FLECHAS AL PULSAR , PASAR ADELANTE Y DETRAS */

/* escuchamos en la imagen flecha izquierda */
flechaizd.addEventListener("click", function(){
    ordenprincipal = fotoactiva.getAttribute("orden");
    ordenprincipal=Number(ordenprincipal);
    if(ordenprincipal===1){
        ordensiguiente=numfotos;
    }else{
        ordensiguiente=ordenprincipal-1
    };
    fotoactiva.src=`./assets/img/slider${ordensiguiente}_2560.jpg`;
    fotoactiva.setAttribute("orden",ordensiguiente);
    crearintervalo(tiempoespera-2000);
    console.log('ordensiguiente='+ordensiguiente);
});

flechader.addEventListener("click", function(){
    
    ordenprincipal = fotoactiva.getAttribute("orden");
    ordenprincipal=Number(ordenprincipal);
    if(ordenprincipal===numfotos){
        ordensiguiente=1;
    }else{
        ordensiguiente=ordenprincipal+1
    };
    fotoactiva.src=`./assets/img/slider${ordensiguiente}_2560.jpg`;
    fotoactiva.setAttribute("orden",ordensiguiente);
     
    crearintervalo(tiempoespera-2000);
});

/* zona de ejecucion de foto random */
/* pasar la variable a numerico */

/*
numaleatorio=Number(numaleatorio);
numaleatorio=Math.random()*numfotos;
numaleatorio=Math.round(numaleatorio);
fotoactiva.src=`./assets/img/slider${numaleatorio}_2560.jpg`;
fotoactiva.setAttribute("orden",numaleatorio);
*/

funcionrandom();  // cambiar foto aleatoriamente
crearintervalo(tiempoespera);

/* zona de funciones */
/* funcionrandon que cambiara de foto aleatoriamente  */
function funcionrandom(){
    let numaleatorio ;
    let numaleatorio2 ;
    numaleatorio2=fotoactiva.getAttribute("orden");
    numaleatorio=Number(numaleatorio);
    numaleatorio=Math.random()*numfotos;
    /* esto redondea al entero mas cercano mayoy o menor
        numaleatorio=Math.round(numaleatorio);*/
    /* esto redondea al entero siguiente
        numaleatorio=Math.ceil(numaleatorio);*/
    numaleatorio=Math.round(numaleatorio);
    /*console.log('numaleatorio='+numaleatorio+' y numaleatorio2='+numaleatorio2);*/
    if(numaleatorio=numaleatorio2){
        /*console.log('numaleatorio era el mismo='+numaleatorio);*/
        numaleatorio=Math.random()*numfotos;
        numaleatorio=Math.round(numaleatorio);
    };
    if(numaleatorio===0){
        numaleatorio=1;
    }
    fotoactiva.src=`./assets/img/slider${numaleatorio}_2560.jpg`;
    fotoactiva.setAttribute("orden",numaleatorio);
    /*console.log('numaleatorio='+numaleatorio);*/
};

/* funcion de cambio automatico de imagenes cada x segundos */

function crearintervalo(valorRecibido){
    if(intervalo != undefined){
        clearInterval(intervalo)
    }
    intervalo=window.setInterval(funcionrandom,valorRecibido);
}

