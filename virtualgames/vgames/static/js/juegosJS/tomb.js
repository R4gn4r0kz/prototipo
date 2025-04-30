function agregarYRedirigir() {
    const nombreJuego = "Tomb Raider I-III";
    const precioJuego = 35990;
    const boton = document.getElementById('boton-elden');

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const yaExiste = carrito.some(producto => producto.nombre === nombreJuego);

    if (!yaExiste) {
      carrito.push({ nombre: nombreJuego, precio: precioJuego });
      localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    
    boton.innerHTML = "✅ ¡Ya está en tu carrito Lara Croft!";
    boton.style.pointerEvents = "none"; 

    
    setTimeout(() => {
      window.location.href = "../carrito/carrito.html";
    }, 1200); 
  }