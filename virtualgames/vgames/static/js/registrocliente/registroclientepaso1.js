document.getElementById("btnRegistroPaso1").addEventListener("click", function () {
    let nombreUsuario = document.getElementById("nombreusuario").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (!nombreUsuario || !correo || !password || !confirmPassword) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    // Guardar datos en localStorage
    let usuario = {
        nombreUsuario: nombreUsuario,
        correo: correo
    };

    localStorage.setItem("usuarioRegistrado", JSON.stringify(usuario));

    alert("Registro exitoso. Redirigiendo al perfil...");
    window.location.href = "../perfil/perfil.html"; // Ajusta la ruta si es necesario
});
