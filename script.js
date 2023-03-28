

class Producto {
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const branding = new Producto ("Branding", 1000);
const frontend = new Producto ("Frontend", 1500);
const UXUI = new Producto ("UxUi", 2200);
const descuentoNum = 0.8;
const divCarritoCard = document.getElementById("divCarrito")
const div = document.createElement("div");

let arrayCarrito = [0];
let arrayServicios = [];

let btnClickServiciosBrandingCarrito = document.getElementById("btnClickServiciosBrandingCarrito");
btnClickServiciosBrandingCarrito.addEventListener("click", btnClickBrandingCarritoResp);

let btnClickServiciosFrontendCarrito = document.getElementById("btnClickServiciosFrontendCarrito");
btnClickServiciosFrontendCarrito.addEventListener("click", btnClickFrontendCarritoResp);

let btnClickServiciosUxUiCarrito = document.getElementById("btnClickServiciosUxUiCarrito");
btnClickServiciosUxUiCarrito.addEventListener("click", btnClickUxUiCarritoResp);

let btnVaciarCarrito = document.getElementById("btnVaciarCarrito");
btnVaciarCarrito.addEventListener("click", btnVaciarCarritoResp);

carritoLocalStorage = JSON.parse(localStorage.getItem("carritoLocalStorage"));
if(carritoLocalStorage == null){
    let arrayCarrito = localStorage.getItem("carritoLocalStorageNum");
    console.log("carrito vacío")
    console.log(arrayCarrito);
    if(arrayCarrito == null){
        console.log("es null")
        totalCarrito();
    }else{
        console.log("no es null")
    };
} else {
    console.log("lleno");
    arrayServicios = carritoLocalStorage;
    divCarritoCard.innerHTML=""
    arrayServicios.forEach(producto => {
        let div = document.createElement("div");
        div.className = "divCarritoServicio";
        div.innerHTML= `<p> Servicio : ${producto.nombre} </p>
                        <p> Precio : ${producto.precio} </p>`;
    
                        divCarritoCard.appendChild(div);
    });
    totalCarrito();
    console.log(arrayServicios);
};
function totalCarrito(){
    carritoTotal.innerHTML=""
    let div = document.createElement("div");
    let arrayCarrito = localStorage.getItem("carritoLocalStorageNum");
    if(arrayCarrito == null){
        div.className = "carritoTotalDiv";
        div.innerHTML= `<p>0</p>`;
        carritoTotal.appendChild(div);
        console.log("El total a pagar es de:");
        console.log(arrayCarrito); 
    }else{
        console.log("no es null")
        div.className = "carritoTotalDiv";
        div.innerHTML= `<p>${arrayCarrito}</p>`;
        carritoTotal.appendChild(div);
        console.log("El total a pagar es de:");
        console.log(arrayCarrito); 
    };
};

function guardarCarritoNumLocalStorage(){
    localStorage.setItem( "carritoLocalStorageNum", arrayCarrito);
    carritoLocalStorageNum = localStorage.getItem("carritoLocalStorageNum");
};
function guardarArrayServiciosLocalStorage(){
    localStorage.setItem( "carritoLocalStorage", JSON.stringify(arrayServicios));
    carritoLocalStorage = JSON.parse(localStorage.getItem("carritoLocalStorage"));
};

function btnClickBrandingCarritoResp(){
    console.log("Botón clickeado");
    arrayServicios.push(branding);
    console.log("■ ■ Método reduce carrito ■ ■");
    arrayCarrito = arrayServicios.reduce((acumulador, elemento)=> acumulador + elemento.precio, 0);
    console.log("carrito tiene");
    console.log(arrayCarrito);
    divCarritoCard.innerHTML=""
    arrayServicios.forEach(producto => {
        let div = document.createElement("div");
        div.className = "divCarritoServicio";
        div.innerHTML= `<p> Servicio : ${producto.nombre} </p>
                        <p> Precio : ${producto.precio} </p>`;
    
                        divCarritoCard.appendChild(div);
    });
    console.log(arrayServicios);

    guardarCarritoNumLocalStorage();
    guardarArrayServiciosLocalStorage();
    totalCarrito();

}
function btnClickFrontendCarritoResp(){
    console.log("Botón clickeado");
    arrayServicios.push(frontend);
    console.log("■ ■ Método reduce carrito ■ ■");
    arrayCarrito = arrayServicios.reduce((acumulador, elemento)=> acumulador + elemento.precio, 0);
    console.log(arrayCarrito);
    divCarritoCard.innerHTML=""
    arrayServicios.forEach(producto => {
        let div = document.createElement("div");
        div.className = "divCarritoServicio";
        div.innerHTML= `<p> Servicio : ${producto.nombre} </p>
                        <p> Precio : ${producto.precio} </p>`;
    
                        divCarritoCard.appendChild(div);
    });
    console.log(arrayServicios);

    guardarCarritoNumLocalStorage();
    guardarArrayServiciosLocalStorage();
    totalCarrito();
}
function btnClickUxUiCarritoResp(){
    console.log("Botón clickeado");
    arrayServicios.push(UXUI);
    console.log("■ ■ Método reduce carrito ■ ■");
    arrayCarrito = arrayServicios.reduce((acumulador, elemento)=> acumulador + elemento.precio, 0);
    console.log(arrayCarrito);
    divCarritoCard.innerHTML=""
    arrayServicios.forEach(producto => {
        let div = document.createElement("div");
        div.className = "divCarritoServicio";
        div.innerHTML= `<p> Servicio : ${producto.nombre} </p>
                        <p> Precio : ${producto.precio} </p>`;
    
                        divCarritoCard.appendChild(div);
    });
    console.log(arrayServicios);
    guardarCarritoNumLocalStorage();
    guardarArrayServiciosLocalStorage();
    totalCarrito();
}
function btnVaciarCarritoResp(){
    console.log("Vaciar carrito");
    divCarritoCard.innerHTML=""
    arrayServicios = [];
    localStorage.clear("carritoLocalStorage");
    localStorage.clear("carritoLocalStorageNum");
    carritoLocalStorage = localStorage;
    console.log(arrayServicios);
    console.log(carritoLocalStorage)
    totalCarrito();
}
function carritoCards(){
    arrayServicios.forEach(producto => {
        div.innerHTML= `<p> Servicio : ${producto.nombre} </p>
                        <p> Precio : ${producto.precio} </p>`;
    
                        divCarritoCard.appendChild(div);
    });
}

//Esto es para cambiar los precios automáticamente en el DOM solo con cambiar los const del principio del script.js :D
servicioBrandingPrecio.innerHTML = "$" + branding.precio;
servicioFrontendPrecio.innerHTML = "$" + frontend.precio;
servicioUxUiPrecio.innerHTML = "$" + UXUI.precio;

//Api con muchisimos consejos.
fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
    // Accede al consejo
    const consejo = data.slip.advice;
    // Actualiza el contenido del elemento "consejo" con el consejo obtenido
    document.getElementById("consejo").innerHTML = "<h2>" + consejo + "</h2>";
    })
    .catch(error => {
    console.error('Error:', error);
    });

    const FinalizarCompra = document.querySelector("#btnFinalizarCompra");


    FinalizarCompra.addEventListener('click', ()=>{
        console.log("click");
        carritoLocalStorage = JSON.parse(localStorage.getItem("carritoLocalStorage"));
        console.log(carritoLocalStorage);
        if(carritoLocalStorage == null){
            console.log("No se puede finalizar compra porque no hay nada en el carrito")
            console.log(arrayCarrito);
            console.log(carritoLocalStorage);
        } else {
            console.log(carritoLocalStorage);
            console.log("muestro cartel");
            gsap.fromTo(cartel, {
                y: 100, // posición inicial
                visibility: "hidden",
                opacity: 0,
                }, {
                y: -100, // posición final
                visibility: "visible",
                opacity: 1,
                duration: 1, // duración de la animación en segundos
                ease: "back.out(1.7)"
                });
            setTimeout(() => {
                console.log("transición cartel")
                gsap.to(cartel, { 
                    opacity: 0,
                    duration: 1
                });
            }, 2000);
            setTimeout(() => {
                console.log("escondo cartel")
                gsap.to(cartel, { 
                    duration: 1,
                    visibility: "hidden"
                });
            }, 3000);
            console.log("Compra finalizada, gracias :)");
/*             document.querySelector('.carritoTotalDiv p').textContent = '0';
            divCarritoCard.innerHTML="";
            arrayServicios = [];
            carritoLocalStorage = localStorage; */
            btnVaciarCarritoResp();
        };
    });

