import { almacenarCarrito} from './carrito.js';

export var productos = [];

document.addEventListener('DOMContentLoaded',(e)=>{


    fetch('./js/productos.json')
    .then(res => res.json())
    .then( (data) => {
        console.log(data);
        productos = data.productos;
        mostrarProductos(productos);
        agregarListener();
    }
        );

});

function agregarListener(){
    const botones = window.document.querySelectorAll(".button-outline");

    botones.forEach(e=>{
        
       e.addEventListener('click',
        
        (event)=>{

            if(event.target.getAttribute('id') > 0){
                            
                agregarAlCarrito(productos.find( (e) => e.id == event.target.getAttribute('id')));

            }
        }
        
    ) 
    })
};


function agregarAlCarrito(producto){

    if( producto && producto.id > 0){

        almacenarCarrito(producto);
      
    }
    
}


function mostrarProductos(productos){

    productos.forEach((producto) => {
      const container = document.createElement("div");
      container.innerHTML = retornarCardHTML(producto);
      if (window.document.querySelector(".container")) {
        window.document.querySelector(".container").appendChild(container);
      }
    });


}

function retornarCardHTML(producto){

    const respuesta= `
        <div class="card">
            <div class="card-image">${producto.imagen}</div>
            <div class="card-name">${producto.nombre}</div>
            <div class="card-price">$ ${producto.precio}</div>
            <div class="card-button">
            <button class="button button-outline button-add" id="${producto.id}" title="Click para agregar al carrito">+</button>
            </div>
        </div>` ;

    return respuesta

}