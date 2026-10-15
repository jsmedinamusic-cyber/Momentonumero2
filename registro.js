
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