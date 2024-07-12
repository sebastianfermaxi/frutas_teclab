import {productos} from './productos.js';
import {carrito} from './carrito.js'

const arrayProductos = productos;

const productosConId = [];

document.addEventListener('DOMContentLoaded',(e)=>{

    console.log('Contenido cargado');
    agregarId(arrayProductos);
    cargarProductos(productosConId);
    agregarListener();


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
    console.log('guardado en el carrito elemento ' + id);
    if( id && id > 0){

       const res = productosConId.find(e => e.id == id );
       console.log(res)
       carrito.push(res)

    }
        console.clear();
        console.table(carrito)
    
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

function cargarProductos(productos){

    productos.forEach(element => {
        const container = document.createElement('div');
        container.innerHTML = retornarCardHTML(element);
    window.document.querySelector(".container").appendChild(
        container
    );

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