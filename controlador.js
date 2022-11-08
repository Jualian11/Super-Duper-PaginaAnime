//Controlando etiquetas con el DOM

//1.Alamacenar en Memoria (Crear una variable) la etiqueta que quiero controlar

let etiquetaImagen=document.getElementById("fotografia") 

//2.Controlando las etiquetas
//2.1 Controlar es cambiar la fuente (SRC) de una etiqueta

etiquetaImagen.src="./img/seconimg.jpg"

//2.2 Controlar es cambiar el contenido de texto de una etiqueta
let etiquetaTitulo=document.getElementById("sinopsis")
etiquetaTitulo.textContent="HISTORIA"

//2.3 Cotrolar es agregar estilos
etiquetaTitulo.classList.add('fuente','alineado')

//2.4 Controlar es remover estilos
let etiquetaParrafo=document.getElementById("parrafo")
etiquetaParrafo.classList.remove('text-danger')

//2.5 Controlar es DETECTAR EVENTOS
let etiquetaBoton=document.getElementById("boton")
etiquetaBoton.addEventListener('click',function(evento){
    alert("estamos haciendo clic   ")
})
