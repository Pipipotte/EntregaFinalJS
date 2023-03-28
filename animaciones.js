//HOLA PROFE, EL SCRIPT.JS ES LO QUE RESPECTA A LA CONSIGNA, ESTE "ANIMACIONES.JS" ES SOLO EXPERIEMTNACIÓN SOBRE ANIMACIONES CON JS, PERO SI QUERES PODES TIRARME ALGUNA OBSERVACIÓN SOBRE ESTO TAMBIÉN SINO NO PASA NADA ;) //

let cursor1 = document.querySelector("#cursor1");
let cursor2 = document.querySelector("#cursor2");
const coords = {x: 0, y: 0};

function actualizarPosicion (e){
    let x = e.pageX;
    let y = e.pageY;

    window.requestAnimationFrame(function(){
        let cursor1X = x - 26;
        let cursor1Y = y - 28;
        cursor1.style.left = cursor1X + "px";
        cursor1.style.top = cursor1Y + "px";

        cursor2.style.left = x + "px";
        cursor2.style.top = y + "px";
    });
} 

const VaciarCarrito = document.querySelector("#btnVaciarCarrito");
const FinalizarCompra = document.querySelector("#btnFinalizarCompra");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener('mouseover', () => {
        cursor2.style.width = '0px';
        cursor2.style.height = '0px';
        cursor2.style.border = '0px';
        cursor2.style.background = 'transparent';

        cursor1.style.borderStyle = 'dashed';
        cursor1.style.borderWidth = '4px';
        cursor1.style.borderColor = '#edd7ff';
    });
    boton.addEventListener('mouseout', () => {
        cursor1.style.width = '50px';
        cursor1.style.height = '50px';
        cursor1.style.border = '2px solid #edd7ff';

        cursor2.style.width = '8px';
        cursor2.style.height = '8px';
        cursor2.style.background = '#9b44ff';
        cursor2.style.border = '0px';
    });
    boton.addEventListener('click', () => {
        gsap.fromTo(cursor1, {
            height: "20px",
            width: "20px",
        },{
            duration: .2,
            ease: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
            height: "50px",
            width: "50px",
        });
    });
});

FinalizarCompra.addEventListener('mouseover', () => {
    cursor2.style.width = '0px';
    cursor2.style.height = '0px';
    cursor2.style.border = '0px';
    cursor2.style.background = 'transparent';

    cursor1.style.borderStyle = 'dashed';
    cursor1.style.borderWidth = '4px';
    cursor1.style.borderColor = 'green';
});
FinalizarCompra.addEventListener('mouseout', () => {
    cursor1.style.width = '50px';
    cursor1.style.height = '50px';
    cursor1.style.border = '2px solid #edd7ff';

    cursor2.style.width = '8px';
    cursor2.style.height = '8px';
    cursor2.style.background = '#9b44ff';
    cursor2.style.border = '0px';
});
VaciarCarrito.addEventListener('mouseover', () => {
    cursor2.style.width = '0px';
    cursor2.style.height = '0px';
    cursor2.style.border = '0px';
    cursor2.style.background = 'transparent';

    cursor1.style.borderStyle = 'dashed';
    cursor1.style.borderWidth = '4px';
    cursor1.style.borderColor = 'red';
});
VaciarCarrito.addEventListener('mouseout', () => {
    cursor1.style.width = '50px';
    cursor1.style.height = '50px';
    cursor1.style.border = '2px solid #edd7ff';

    cursor2.style.width = '8px';
    cursor2.style.height = '8px';
    cursor2.style.background = '#9b44ff';
    cursor2.style.border = '0px';
});

document.addEventListener("mousemove", actualizarPosicion);



FinalizarCompra.addEventListener('click', ()=>{



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
});