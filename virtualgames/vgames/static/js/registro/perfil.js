document.addEventListener("DOMContentLoaded", function () {
  // Obtener el usuario desde sessionStorage (donde se guardó al iniciar sesión)
  let usuario = JSON.parse(sessionStorage.getItem("usuario"));

  // Si existe un usuario, mostrar su información
  if (usuario) {
    document.getElementById("nombreCompleto").textContent = usuario.nombre + " " + (usuario.apellido || "");
    document.getElementById("usuario").textContent = usuario.nombreusuario;
    document.getElementById("correo").textContent = usuario.correo;
    document.getElementById("fechaNacimiento").textContent = usuario.fechaNacimiento || "No especificado";
    document.getElementById("direccion").textContent = usuario.direccion || "No especificado";
  } else {
    // Si no hay datos, mostrar alerta y redirigir al registro
    alert("No hay datos de usuario registrados.");
    window.location.href = "../registro/registro.html";
  }
});