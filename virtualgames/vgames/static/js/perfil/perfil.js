document.addEventListener("DOMContentLoaded", function () {
    const usuarioData = JSON.parse(localStorage.getItem("usuarioRegistro"));


    // Asignar valores a los elementos del perfil
    document.getElementById("nombreCompleto").textContent = usuarioData.nombreCompleto || "No disponible";
    document.getElementById("usuario").textContent = usuarioData.nombreusuario || "No disponible";
    document.getElementById("correo").textContent = usuarioData.correo || "No disponible";
    document.getElementById("fechaNacimiento").textContent = usuarioData.fechaNacimiento || "No disponible";
    document.getElementById("direccion").textContent = usuarioData.direccion || "No disponible";
});
