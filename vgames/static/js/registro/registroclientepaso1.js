document.addEventListener("DOMContentLoaded", function () {
    // Referencia a los botones del formulario
    const btnContinuar = document.getElementById("btnRegistroPaso1");
    const btnLimpiar = document.getElementById("btnLimpiar");
    // Evento al hacer clic en CONTINUAR
    btnContinuar.addEventListener("click", function () {
        // Obtener los valores ingresados por el usuario
        const nombreusuario = document.getElementById("nombreusuario").value.trim();
        const email = document.getElementById("correo").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
  
    /// Validaciones campo por campo
    if (!nombreusuario) {
        alert("Debe ingresar un nombre de usuario");
        return;
    }
    if (!email) {
        alert("Debe ingresar un correo");
        return;
    }
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(email)) {
        alert("Ingrese un correo válido");
        return;
    }
    if (!password) {
        alert("Debe ingresar una contraseña");
        return;
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,18}$/;
    if (!passwordRegex.test(password)) {
        alert("La contraseña debe tener entre 6 y 18 caracteres, al menos un número y una letra mayúscula");
        return;
    }
    if (!confirmPassword) {
        alert("Debe confirmar la contraseña");
        return;
    }
    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
    }
  
    // Guardar los datos en sessionStorage
    sessionStorage.setItem("nombreusuario", nombreusuario);
    sessionStorage.setItem("correo", email);
    sessionStorage.setItem("password", password);
  
    // Redirigir al paso 2
    window.location.href = "/registro/registro2";
});

// Evento al hacer clic en LIMPIAR
if (btnLimpiar) {
    btnLimpiar.addEventListener("click", function () {
        document.querySelectorAll("#registroFormPaso1 input").forEach(input => input.value = "");
        alert("Formulario limpiado.");
    });
}

// Validación al presionar ENTER
const inputs = document.querySelectorAll('#registroFormPaso1 input');

inputs.forEach((input, index) => {
    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            
            const id = input.id;
            const valor = input.value.trim();
            let valido = true;
            
            // Validación individual por campo
            if (id === "nombreusuario" && !valor) {
                document.getElementById("error-nombreusuario").textContent = "Debe ingresar un nombre de usuario";
                input.style.border = "2px solid #ff6b6b";
                valido = false;
            }
            if (id === "correo") {
                if (!valor) {
                    document.getElementById("error-correo").textContent = "Debe ingresar un correo";
                    input.style.border = "2px solid #ff6b6b";
                    valido = false;
                } else {
                    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!correoRegex.test(valor)) {
                        document.getElementById("error-correo").textContent = "Ingrese un correo válido";
                        input.style.border = "2px solid #ff6b6b";
                        valido = false;
                    }
                }
            }
            if (id === "password") {
                if (!valor) {
                    document.getElementById("error-password").textContent = "Debe ingresar una contraseña";
                    input.style.border = "2px solid #ff6b6b";
                    valido = false;
                } else {
                    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,18}$/;
                    if (!passwordRegex.test(valor)) {
                        document.getElementById("error-password").textContent = "Debe tener entre 6 y 18 caracteres, al menos un número y una mayúscula";
                        input.style.border = "2px solid #ff6b6b";
                        valido = false;
                    }
                }
            }
            if (id === "confirmPassword") {
                const password = document.getElementById("password").value;
                if (!valor) {
                    document.getElementById("error-confirmPassword").textContent = "Debe confirmar la contraseña";
                    input.style.border = "2px solid #ff6b6b";
                    valido = false;
                } else if (valor !== password) {
                    document.getElementById("error-confirmPassword").textContent = "Las contraseñas no coinciden";
                    input.style.border = "2px solid #ff6b6b";
                    valido = false;
                }
            }
            // Si es válido, pasar al siguiente campo
            if (valido) {
                input.style.border = "2px solid white";
                document.getElementById(`error-${id}`).textContent = "";
                // Pasar al siguiente input si todo OK
                const siguiente = inputs[index + 1];
                if (siguiente) {
                    siguiente.focus();
                } else {
                    document.getElementById("btnRegistroPaso1").focus();
                }
            }
        }
    });
});

});  
  
// Animacionregistro.js
move();
