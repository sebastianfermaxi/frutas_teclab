import { borrarCarrito } from "./carrito.js";

window.document.addEventListener("DOMContentLoaded", () => {
  const hayCarrito = JSON.parse(localStorage.getItem("carrito"));

  if (hayCarrito && hayCarrito[0] && window.document.querySelector("#t-body")) {
    hayCarrito.forEach((element) => {
      const container = document.createElement("tr");
      container.innerHTML = retornarTableHTML(element);
      window.document.querySelector("#t-body").appendChild(container);
    });

    agregarListener();
  }
});

function agregarListener() {
  const botones = window.document.querySelectorAll(".borrar");

  botones.forEach((e) => {
    e.addEventListener(
      "click",

      (event) => {
        if (event.target.getAttribute("id")) {
          borrarCarrito(event.target.getAttribute("id"));
        }
      }
    );
  });

  const compra = window.document.querySelector("#btnComprar");

  compra.addEventListener("click", () => {
    document.querySelector("#gracias").textContent = "Gracias por su compra!";
    localStorage.clear();

    setTimeout(() => {
      document.querySelector("#gracias").textContent = "";
      window.location.reload();
    }, 1300);
  });
}

function retornarTableHTML(producto) {
  const respuesta = `
        
            <tr>
        <td>${producto.imagen}</td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td><img src="images/icon-fruits-64.png" width="24px" class="borrar" id=${producto.id}></td>
            </tr>        
        `;

  return respuesta;
}
