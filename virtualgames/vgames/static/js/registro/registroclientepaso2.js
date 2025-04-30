document.addEventListener("DOMContentLoaded", function () {
  // Referencias a los botones del formulario
  const btnRegistro = document.getElementById("btnRegistroCompleto");
  const btnLimpiar = document.getElementById("btnLimpiar");
  // Verificar datos del paso 1
  const nombreUsuario = sessionStorage.getItem("nombreusuario");
  const correo = sessionStorage.getItem("correo");
  const password = sessionStorage.getItem("password");
  // Si no hay datos del paso 1, se muestra un mensaje y se redirige al usuario
  if (!nombreUsuario || !correo || !password) {
    alert("No se encontró información del paso 1. Redirigiendo...");
    window.location.href = "registrocliente1.html";
    return;
  }

  // Función para validar y registrar
  function validarFormularioPaso2() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const direccion = document.getElementById("direccion").value.trim();
    const checkbox = document.getElementById("aceptoTerminos");
    // Validar que los campos obligatorios estén completos
    if (!nombre || !apellido || !fechaNacimiento) {
      alert("Todos los campos (excepto la dirección) son obligatorios");
      return;
    }
    // Validar que el usuario tenga al menos 13 años
    const fechaActual = new Date();
    const fechaNac = new Date(fechaNacimiento);
    let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
    const diferenciaMeses = fechaActual.getMonth() - fechaNac.getMonth();
    const diferenciaDias = fechaActual.getDate() - fechaNac.getDate();
    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && diferenciaDias < 0)) {
      edad--;
    }
    if (edad < 13) {
      alert("Debes tener al menos 13 años para registrarte");
      return;
    }
    // Verificar que el usuario haya aceptado los términos
    if (!checkbox.checked) {
      alert("Debes aceptar los términos y condiciones para registrarte");
      return;
    }

    //Simulación de registro del usuario con los datos recopilados
    const usuarioFinal = {
      usuario: nombreUsuario,
      correo: correo,
      password: password,
      nombre: nombre,
      apellido: apellido,
      fechaNacimiento: fechaNacimiento,
      direccion: direccion,
    };
    
    // Guarda al usuario registrado en localStorage
    localStorage.setItem("usuarioRegistrado", JSON.stringify(usuarioFinal));
    // Guarda temporalmente para saludo en index.html
    sessionStorage.setItem("usuarioLogueado", nombreUsuario);
    // Mensaje de confirmación
    alert("¡¡¡ Te has registrado exitosamente !!!");
    // Redirigir a index.html después de un delay de 2 segundos
    setTimeout(() => {
      window.location.href = "../index.html";
    }, 2000);
  }

  // Clic en el botón REGISTRAR
  btnRegistro.addEventListener("click", validarFormularioPaso2);

  // Limpiar campos
  btnLimpiar.addEventListener("click", function () {
    document.querySelectorAll("#registroFormPaso2 input").forEach(input => input.value = "");
    alert("Formulario limpiado");
  });

  // Validar con Enter al estar en el último campo
  const inputs = document.querySelectorAll("#registroFormPaso2 input");

  inputs.forEach((input, index) => {
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        const siguiente = inputs[index + 1];
        if (siguiente) {
          siguiente.focus();
        } else {
          validarFormularioPaso2(); // Validar y registrar
        }
      }
    });
  });
});

// Animación del logo flotante
move();
