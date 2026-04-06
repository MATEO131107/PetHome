// ================================
// CAMBIAR FONDO DE LA PAGINA
// ================================

function cambiarFondo(){

let colores = [
"lightblue",
"lightgreen",
"lightyellow",
"lightpink",
"lightgray"
];

let numero = Math.floor(Math.random() * colores.length);

document.body.style.background = colores[numero];

}



// ================================
// MENSAJE DE BIENVENIDA
// ================================

function mostrarBienvenida(){
    alert("¡Bienvenido a tu app de cuidado de mascotas 🐾!");
}

window.onload = function() {

    if (!localStorage.getItem("bienvenidaMostrada")) {
        alert("Bienvenido a App Mascotas 🐾");

        localStorage.setItem("bienvenidaMostrada", "true");
    }

}



// ================================
// CAMBIAR TEXTO
// ================================

function cambiarTexto(){

document.getElementById("texto").innerHTML =
"El texto fue modificado usando JavaScript.";

}



// ================================
// VALIDAR FORMULARIO
// ================================

function validarFormulario(){

let nombre = document.getElementById("nombre").value;
let email = document.getElementById("email").value;

if(nombre === "" || email === ""){

alert("Por favor completa todos los campos");
return false;

}

alert("Formulario enviado correctamente");
return true;

}



// ================================
// AGRANDAR IMAGENES DE GALERIA
// ================================

function agrandarImagen(img){

if(img.style.maxWidth === "500px"){
    img.style.maxWidth = "300px";
}else{
    img.style.maxWidth = "500px";
}

}


// ================================
// SUMAR DATOS
// ================================

function sumarDatos(){

let n1 = Number(document.getElementById("num1").value);
let n2 = Number(document.getElementById("num2").value);
let n3 = Number(document.getElementById("num3").value);

let suma = n1 + n2 + n3;

document.getElementById("resultado").innerHTML =
"Total de comida: " + suma + " gr";

}



// ================================
// MULTIPLICAR DATOS
// ================================

function calcularDosis() {
    let peso = document.getElementById("peso").value;
    let dosis = document.getElementById("dosis").value;

    let total = peso * dosis;

    document.getElementById("resultado").innerHTML =
    "Dosis recomendada: " + total + " ml 💉";
}


// ================================
// PROMEDIO DE DATOS
// ================================

function promedioDatos(){

let n1 = Number(document.getElementById("num1").value);
let n2 = Number(document.getElementById("num2").value);
let n3 = Number(document.getElementById("num3").value);

let promedio = (n1 + n2 + n3) / 3;

document.getElementById("resultado").innerHTML =
"Promedio por comida: " + promedio + " gr";

}

