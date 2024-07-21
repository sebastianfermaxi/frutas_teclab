import { productosConId } from "./index.js";

export var carritoFrutas = [];

export function borrarCarrito(id) {
  carritoFrutas = verificarCarrito();

  const res = productosConId.find((e) => e.id == id);

  var nuevoCarrito = [];

  if (res) {
    nuevoCarrito = carritoFrutas.filter((e) => e.id != id);
  }
  localStorage.clear();
  console.log("nuevo carrito " + nuevoCarrito);
  localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  window.location.reload();
  console.table(carritoFrutas);
}

export function almacenarCarrito(id) {
  carritoFrutas = verificarCarrito();

  const res = productosConId.find((e) => e.id == id);

  if (res) {
    carritoFrutas.push(res);
    localStorage.setItem("carrito", JSON.stringify(carritoFrutas));
    console.clear();
    console.table(carritoFrutas);
  }
}

function verificarCarrito() {
  var carritoLS = localStorage.getItem("carrito");
  return JSON.parse(carritoLS) || [];
}
