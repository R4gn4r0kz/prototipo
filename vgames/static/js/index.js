document.addEventListener("DOMContentLoaded", () => {
  // Mostrar saludo si hay usuario logueado
  const contenedorSaludo = document.getElementById("usuario-bienvenida");
  const seccionRegistro = document.querySelector(".registro");
  const tituloBienvenida = document.querySelector("#subtitulo");
  const usuario = sessionStorage.getItem("usuarioLogueado");

  if (usuario) {
    contenedorSaludo.innerHTML = `
      <p class="bienvenida">🎮 ¡ Hola, <strong>${usuario}</strong> ! 😎 Listo para jugar? </p>
    `;
    // Ocultar los botones de registro
    document.getElementById('btnRegistrarse').classList.add('oculto');
    document.getElementById('btnRegistrarTrabajador').classList.add('oculto');
    if (seccionRegistro) seccionRegistro.style.display = "none";
    if (tituloBienvenida) tituloBienvenida.style.display = "none";
  }

  // Función botón "VER MI PERFIL"
  const botonPerfil = document.getElementById("btnVermiperfil");
  if (botonPerfil) {
    botonPerfil.addEventListener("click", () => {
      const usuario = sessionStorage.getItem("usuarioLogueado");
      if (usuario) {
        window.location.href = "/perfil/perfil";
      } else {
        alert("No hay un usuario registrado. Por favor, regístrate primero.");
        window.location.href = "registro/registro1";
      }
    });
  }

  // Referencia al contenedor del carrusel
  const gameList = document.getElementById("gameList");

  // Asegurarse de que existe
  if (!gameList) return;

  // Categorías
  const categorias = [
    { nombre: "Aventuras", imagen: "/static/imagenes/aventuras.jpg", link: "/categorias/aventura" },
    { nombre: "Acción", imagen: "/static/imagenes/Accion.jpg", link: "/categorias/accion" },
    { nombre: "Estrategia", imagen: "/static/imagenes/estrategia.jpg", link: "/categorias/estrategia" },
    { nombre: "Terror", imagen: "/static/imagenes/terror.jpg", link: "/categorias/terror" },
    { nombre: "Carreras", imagen: "/static/imagenes/carreras.jpg", link: "/categorias/carrera" },
  ];

  // Insertar dinámicamente los items
  categorias.forEach(cat => {
    const item = document.createElement("div");
    item.className = "game-item";
    item.innerHTML = `
      <a href="${cat.link}">
        <img src="${cat.imagen}" alt="${cat.nombre}">
        <p>${cat.nombre}</p>
      </a>
    `;
    gameList.appendChild(item);
  });

  // Duplicar para efecto cinta infinita
  categorias.forEach(cat => {
    const item = document.createElement("div");
    item.className = "game-item";
    item.innerHTML = `
      <a href="${cat.link}">
        <img src="${cat.imagen}" alt="${cat.nombre}">
        <p>${cat.nombre}</p>
      </a>
    `;
    gameList.appendChild(item);
  });

  // Scroll automático infinito
  let scrollContainer = gameList.parentNode; // contenedor del carrusel (carrusel-contenedor)
  let scrollPos = 0;
  let scrollSpeed = 1;
  let scrollInterval;

  function startScroll() {
    scrollInterval = setInterval(() => {
      scrollContainer.scrollLeft += scrollSpeed;
  
      // Reinicia scroll cuando llega al final del carrusel
      if (scrollContainer.scrollLeft >= gameList.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      }
    }, 20);
  }  

  function stopScroll() {
    clearInterval(scrollInterval);
  }

  // Iniciar scroll
  startScroll();

  // Pausar scroll al pasar el mouse
  scrollContainer.addEventListener("mouseover", stopScroll);
  scrollContainer.addEventListener("mouseleave", startScroll);

  // Flechas manuales
  const btnIzquierda = document.querySelector(".flecha.izquierda");
  const btnDerecha = document.querySelector(".flecha.derecha");

  if (btnIzquierda) {
    btnIzquierda.addEventListener("click", () => {
      scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
    });
  }

  if (btnDerecha) {
    btnDerecha.addEventListener("click", () => {
      scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
    });
  }
});


