function agregarYRedirigir() {
    const nombreJuego = "Need for Speed™ Most Wanted";
    const precioJuego = 43980;
    const boton = document.getElementById('boton-elden');

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const yaExiste = carrito.some(producto => producto.nombre === nombreJuego);

    if (!yaExiste) {
      carrito.push({ nombre: nombreJuego, precio: precioJuego });
      localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    
    boton.innerHTML = "✅ ¡Ya está en tu carrito... corre y domina las calles!";
    boton.style.pointerEvents = "none"; 

    
    setTimeout(() => {
      window.location.href = "../carrito/carrito.html";
    }, 1200); 
  }