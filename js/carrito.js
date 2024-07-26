export var carritoFrutas = [];

export function borrarCarrito(id) {

  carritoFrutas = verificarCarrito();

  var nuevoCarrito = [];
  nuevoCarrito = carritoFrutas.filter((e) => e.id != id);
  
  localStorage.clear();
  console.log("nuevo carrito " + nuevoCarrito);
  localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  window.location.reload();
  console.table(carritoFrutas);
}

export function almacenarCarrito(producto) {

    carritoFrutas = verificarCarrito();

    carritoFrutas.push(producto);
    localStorage.clear();
    localStorage.setItem("carrito", JSON.stringify(carritoFrutas));
    console.clear();
    console.table(carritoFrutas);
  
}

function verificarCarrito() {
  var carritoLS = localStorage.getItem("carrito");
  return JSON.parse(carritoLS) || [];
}
