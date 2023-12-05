/* recogemos en una constante el array de todos los elementos de la clase imgobjetivos */
const imgobjetivos = document.getElementsByClassName("imgObjetivo")

/* recorremos el array */
for (const objetivo of imgobjetivos){
    objetivo.addEventListener("mouseover",function(){
        objetivo.style.transform="rotate(30deg)";
    })

    objetivo.addEventListener("mouseout",function(){
        objetivo.style.transform="rotate(0deg)";
    })
}