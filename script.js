// Usuario y clave pre elegidos
const usuarios = { admin: "1234" };
let intentos = 0;
let bloqueado = false;

const formLogin = document.getElementById("formLogin");
const formRegistro = document.getElementById("formRegistro");
const mensajeLogin = document.getElementById("mensajeLogin");
const mensajeRegistro = document.getElementById("mensajeRegistro");

// Cambiar entre formularios
document.getElementById("irRegistro").onclick = function () {
formLogin.classList.add("oculto");
formRegistro.classList.remove("oculto");
};

document.getElementById("irLogin").onclick = function () {
formRegistro.classList.add("oculto");
formLogin.classList.remove("oculto");
};

formLogin.onsubmit = function (enviar) {
enviar.preventDefault();
if (bloqueado) return;

const usuario = document.getElementById("loginUsuario").value;
const clave = document.getElementById("loginClave").value;
