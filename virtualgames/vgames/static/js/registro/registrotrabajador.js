document.addEventListener("DOMContentLoaded", function () {
    let btnRegistro = document.getElementById("btnRegistroPaso1");
    let btnLimpiar = document.getElementById("btnLimpiar");

    btnRegistro.addEventListener("click", function () {
      let nombreusuario = document.getElementById("nombreusuario").value.trim();
      let correo = document.getElementById("correo").value.trim();
      let password = document.getElementById("password").value;
      let confirmPassword = document.getElementById("confirmPassword").value;
      let nombre = document.getElementById("nombre").value.trim();
      let apellido = document.getElementById("apellido").value.trim();
      let fechaNacimiento = document.getElementById("fechaNacimiento").value;
      let direccion = document.getElementById("direccion").value.trim();
      let rol = document.getElementById("rol").value;
      let checkbox = document.getElementById("aceptoTerminos");
  
      if (!nombreusuario || !correo || !password || !confirmPassword || !nombre ||!apellido|| !fechaNacimiento || !rol) {
        alert("Todos los campos son obligatorios.");
        return;
      }
  
      let correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!correoRegex.test(correo)) {
        alert("Ingrese un correo válido.");
        return;
      }
  
      if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
      }
  
      let passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,18}$/;
      if (!passwordRegex.test(password)) {
        alert("La contraseña debe tener entre 6 y 18 caracteres, al menos un número y una letra mayúscula.");
        return;
      }

      let fechaActual = new Date();
      let fechaNac = new Date(fechaNacimiento);
      let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
      let diferenciaMeses = fechaActual.getMonth() - fechaNac.getMonth();
      let diferenciaDias = fechaActual.getDate() - fechaNac.getDate();

      if (diferenciaMeses < 0 || (diferenciaMeses === 0 && diferenciaDias < 0)) {
        edad--;
      }

      if (edad < 13) {
        alert("Debes tener al menos 13 años para registrarte.");
        return;
      }

      if (!checkbox.checked) {
        alert("Debes aceptar los términos y condiciones para registrarte.");
        return;
      }
  
      alert("Registro exitoso. Ahora puedes iniciar sesión.");
      window.location.href = "../registro/iniciosesion.html";
    });

    btnLimpiar.addEventListener("click", function () {
      document.querySelectorAll("#registroFormPaso1 input").forEach(input => input.value = "");
      alert("Formulario limpiado.");
    });

      // Validar con Enter al estar en el último campo
    const inputs = document.querySelectorAll("#registroFormPaso1 input");

  inputs.forEach((input, index) => {
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        const siguiente = inputs[index + 1];
        if (siguiente) {
          siguiente.focus();
        } else {
          validarFormularioPaso1(); // Validar y registrar
        }
      }
    });
  });
});