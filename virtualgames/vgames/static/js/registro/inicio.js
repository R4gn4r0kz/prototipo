document.addEventListener("DOMContentLoaded", function () {
  // Función que valida el inicio de sesión
  function validarInicioSesion() {
    // Obtiene los valores
    const correo = document.getElementById("loginCorreo").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    // Limpia errores anteriores
    document.getElementById("error-loginCorreo").textContent = "";
    document.getElementById("error-loginPassword").textContent = "";
    document.getElementById("loginCorreo").style.border = "2px solid white";
    document.getElementById("loginPassword").style.border = "2px solid white";

    // Regex para validar formato
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,18}$/;

    // Validación del correo
    if (correo === "") {
      document.getElementById("error-loginCorreo").textContent = "Debes ingresar un correo";
      document.getElementById("loginCorreo").style.border = "2px solid #ff6b6b";
      return;
    }
    if (!emailRegex.test(correo)) {
      document.getElementById("error-loginCorreo").textContent = "El formato del correo no es válido";
      document.getElementById("loginCorreo").style.border = "2px solid #ff6b6b";
      return;
    }

    // Validación de la contraseña
    if (password === "") {
      document.getElementById("error-loginPassword").textContent = "Debes ingresar tu contraseña";
      document.getElementById("loginPassword").style.border = "2px solid #ff6b6b";
      return;
    }
    if (!passwordRegex.test(password)) {
      document.getElementById("error-loginPassword").textContent = "La contraseña debe tener entre 6 y 18 caracteres, con al menos un número y una mayúscula";
      document.getElementById("loginPassword").style.border = "2px solid #ff6b6b";
      return;
    }

    // Si todo está correcto
    alert("Inicio de sesión exitoso.");
    localStorage.setItem("sesionIniciada", "true");
    window.location.href = "../index.html";
  }

  // Al hacer clic en el botón
  document.getElementById("btnIniciarSesion").addEventListener("click", validarInicioSesion);

  // Al presionar ENTER en cualquier input
  const inputs = document.querySelectorAll("#loginForm input");
  inputs.forEach((input) => {
    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        validarInicioSesion();
      }
    });
  });
});

