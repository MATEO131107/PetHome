document.addEventListener("DOMContentLoaded", () => {
  iniciarMenuMovil();
  iniciarFormularioContacto();
});

function iniciarMenuMovil() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
  });
}

function validarFormulario(){

let nombre = document.getElementById("nombre").value;
let email = document.getElementById("email").value;
let mensaje = document.getElementById("mensaje").value;

if(nombre === "" || email === "" || mensaje === ""){
alert("Por favor completa todos los campos");
return false;
}

alert("Formulario enviado correctamente");
return true;

}

function sumarDatos() {
  const n1 = Number(document.getElementById("num1")?.value || 0);
  const n2 = Number(document.getElementById("num2")?.value || 0);
  const n3 = Number(document.getElementById("num3")?.value || 0);
  const resultado = document.getElementById("resultado");

  if (!resultado) return;

  const suma = n1 + n2 + n3;
  resultado.textContent = `Total de comida: ${suma} g`;
}

function promedioDatos() {
  const n1 = Number(document.getElementById("num1")?.value || 0);
  const n2 = Number(document.getElementById("num2")?.value || 0);
  const n3 = Number(document.getElementById("num3")?.value || 0);
  const resultado = document.getElementById("resultado");

  if (!resultado) return;

  const promedio = (n1 + n2 + n3) / 3;
  resultado.textContent = `Promedio por comida: ${promedio.toFixed(1)} g`;
}

function calcularDosis() {
  const peso = Number(document.getElementById("peso")?.value || 0);
  const dosis = Number(document.getElementById("dosis")?.value || 0);
  const resultado = document.getElementById("resultado");

  if (!resultado) return;

  if (peso <= 0 || dosis <= 0) {
    resultado.textContent = "Ingresa valores válidos para calcular la dosis.";
    return;
  }

  const total = peso * dosis;
  resultado.textContent = `Dosis recomendada: ${total.toFixed(1)} ml`;
}

document.addEventListener("DOMContentLoaded", function () {
  iniciarRecordatorios();
});

function iniciarRecordatorios() {
  const checks = document.querySelectorAll(".reminder-check");
  const estado = document.getElementById("estado-recordatorios");

  if (!checks.length || !estado) return;

  function actualizarEstado() {
    const completados = document.querySelectorAll(".reminder-check:checked").length;
    const total = checks.length;

    if (completados === 0) {
      estado.innerHTML = "Aún no has completado tareas hoy.";
    } else if (completados === total) {
      estado.innerHTML = "¡Excelente! Completaste todos los recordatorios del día.";
    } else {
      estado.innerHTML = `Has completado ${completados} de ${total} tareas del día.`;
    }
  }

  checks.forEach(check => {
    check.addEventListener("change", actualizarEstado);
  });

  actualizarEstado();
}