document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript cargado correctamente");
  
    // Referencias
    const btnCambio = document.getElementById("btnCambioContraseña");
    const inputs = document.querySelectorAll("#cambioForm input");
  
    if (!btnCambio) {
      console.error("Botón de CambioContraseña no encontrado");
      return;
    }
  
    // Función de validación principal
    function validarCambioContraseña() {
      const password = document.getElementById("password").value.trim();
      const confirmPassword = document.getElementById("confirmPassword").value.trim();
  
      // Validación: campos vacíos
      if (!password || !confirmPassword) {
        alert("Todos los campos son obligatorios.");
        return;
      }
  
      // Validación: contraseñas distintas
      if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
      }
  
      // Validación: formato de contraseña
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,18}$/;
      if (!passwordRegex.test(password)) {
        alert("La contraseña debe tener entre 6 y 18 caracteres, al menos un número y una letra mayúscula.");
        return;
      }
  
      // Si pasa todas las validaciones
      alert("Contraseña cambiada con éxito.");
      window.location.href = "../registro/registro2.html";
    }
  
    // Validación al hacer clic en el botón
    btnCambio.addEventListener("click", validarCambioContraseña);
  
    // Validación al presionar Enter en cualquier input del formulario
    inputs.forEach((input) => {
      input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          event.preventDefault(); // Evita que el formulario se envíe automáticamente
          validarCambioContraseña();
        }
      });
    });
  });
  