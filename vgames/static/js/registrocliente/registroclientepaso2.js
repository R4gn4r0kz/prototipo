document.getElementById("btnRegistroCompleto").addEventListener("click", function () {
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let direccion = document.getElementById("direccion").value.trim();
    let aceptaTerminos = document.getElementById("aceptoTerminos").checked;

    if (!nombre || !apellido || !fechaNacimiento) {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
    }

    if (!aceptaTerminos) {
        alert("Debe aceptar los términos y condiciones.");
        return;
    }

    // Recuperar datos del primer paso
    let usuarioData = JSON.parse(localStorage.getItem("usuarioRegistro"));

    if (!usuarioData) {
        alert("Error: No se encontraron datos del usuario. Regrese al paso 1.");
        window.location.href = "../registro/registrocliente1.html"; 
        return;
    }

    // Agregar los nuevos datos al objeto usuario
    usuarioData.nombreCompleto = `${nombre} ${apellido}`;
    usuarioData.fechaNacimiento = fechaNacimiento;
    usuarioData.direccion = direccion;

    // Guardar datos completos en localStorage
    localStorage.setItem("usuarioRegistro", JSON.stringify(usuarioData));

    alert("Registro completado con éxito. Redirigiendo al perfil...");
    window.location.href = "../perfil/perfil.html"; // Ajusta la ruta si es necesario
});
