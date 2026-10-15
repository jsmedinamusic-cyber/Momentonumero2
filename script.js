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

// inicio de sesion

formLogin.onsubmit = function (enviar) {
enviar.preventDefault();
if (bloqueado) return;

const usuario = document.getElementById("loginUsuario").value;
const clave = document.getElementById("loginClave").value;

if (usuarios[usuario] === clave) {
    mensajeLogin.className = "ok";
    mensajeLogin.innerHTML = "¡Bienvenido, " + usuario + "!";
    intentos = 0;
    
    setTimeout(function () {
        window.location.href="dashboard.html";

    }, 1500);
} else {
    intentos++;
    if (intentos >= 3) {
    bloqueado = true;
    mensajeLogin.className = "error";
    mensajeLogin.innerHTML = "Cuenta bloqueada por 3 intentos fallidos.";
    formLogin.querySelector("button").disabled = true;
    } else {
    mensajeLogin.className = "error";
    mensajeLogin.innerHTML = "Datos incorrectos. Intento " + intentos + " de 3.";
    }
}
};
// Registrar usuario
formRegistro.onsubmit = function (enviar) {
enviar.preventDefault();

const usuario = document.getElementById("regUsuario").value;
const clave = document.getElementById("regClave").value;

if (usuarios[usuario]) {
    mensajeRegistro.className = "error";
    mensajeRegistro.textContent = "Ese usuario ya existe.";
} else {
    usuarios[usuario] = clave;
    mensajeRegistro.className = "ok";
    mensajeRegistro.textContent = "Usuario registrado. Ya puedes iniciar sesión.";
    formRegistro.reset();
}
};