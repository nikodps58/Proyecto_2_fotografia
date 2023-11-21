/* DECLARACION DE VARIABLES */
var numfotos = 12;  /* numero de fotos */
var ordenprincipal, ordensiguiente;
var intervalo, temporizador;
var tiempoespera = 5000;

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
});