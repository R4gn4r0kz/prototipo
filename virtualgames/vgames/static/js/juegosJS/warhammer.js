function agregarYRedirigir() {
    const nombreJuego = "Warhammer 40,000";
    const precioJuego = 43990;
    const boton = document.getElementById('boton-elden');

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const yaExiste = carrito.some(producto => producto.nombre === nombreJuego);

    if (!yaExiste) {
      carrito.push({ nombre: nombreJuego, precio: precioJuego });
      localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    
    boton.innerHTML = "✅ ¡Ya está en tu carrito Adeptus Astartes!";
    boton.style.pointerEvents = "none"; 

    
    setTimeout(() => {
      window.location.href = "../carrito/carrito.html";
    }, 1200); 
  }