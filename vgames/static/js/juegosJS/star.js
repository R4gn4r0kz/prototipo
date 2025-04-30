function agregarYRedirigir() {
    const nombreJuego = "Starcraft";
    const precioJuego = 64000;
    const boton = document.getElementById('boton-elden');

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const yaExiste = carrito.some(producto => producto.nombre === nombreJuego);

    if (!yaExiste) {
      carrito.push({ nombre: nombreJuego, precio: precioJuego });
      localStorage.setItem('carrito', JSON.stringify(carrito));
    }

   
    boton.innerHTML = "✅ ¡Ya está en tu carrito el campo de batalla estelar!";
    boton.style.pointerEvents = "none"; 

    
    setTimeout(() => {
      window.location.href = "/carrito/carrito";
    }, 1200); 
  }