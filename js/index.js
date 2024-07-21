import {productos} from './productos.js';
import { almacenarCarrito} from './carrito.js'

const arrayProductos = productos;

export const productosConId = [];

document.addEventListener('DOMContentLoaded',(e)=>{

    agregarId(arrayProductos);
    mostrarProductos(productosConId);
    agregarListener();
    //arrayProductos = productosConId;

});

function agregarListener(){
    const botones = window.document.querySelectorAll(".button-outline");

    botones.forEach(e=>{
        
       e.addEventListener('click',
        
        (event)=>{

            if(event.target.getAttribute('id') > 0){
            
                agregarAlCarrito(event.target.getAttribute('id'))

            }
        }
        
    ) 
    })
};


function agregarAlCarrito(id){

    if( id && id > 0){

        almacenarCarrito(id);
      
    }
    
}

function agregarId(productos){

    for (let i = 0; i < productos.length; i++) {
        

       productosConId.push(
        {
            id : i+1,
            imagen :  productos[i].imagen,
            nombre :  productos[i].nombre,
            precio :  productos[i].precio
        }
       )
        
        
    }

    
}

function mostrarProductos(productos){

    productos.forEach((element) => {
      const container = document.createElement("div");
      container.innerHTML = retornarCardHTML(element);
      if (window.document.querySelector(".container")) {
        window.document.querySelector(".container").appendChild(container);
      }
    });

    console.log(arrayProductos);

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