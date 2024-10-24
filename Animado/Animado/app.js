const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

let x = 300;
let y = 200;
let radio = 50;
let crece = true;

setInterval(() => {
    // Limpiar el lienzo antes de dibujar
    ctx.clearRect(0, 0, lienzo.width, lienzo.height);

    // Establecer el color usando la variable radio
    ctx.fillStyle = `hsl(${radio}, 50%, 50%)`;  // Uso de comillas invertidas para interpolación
    ctx.beginPath();
    ctx.arc(x, y, radio, 0, Math.PI * 2);
    ctx.fill();

    // Cambiar el tamaño del círculo
    if (crece) {
        radio++;
    } else {
        radio--;
    }

    // Cambiar la dirección de crecimiento
    if (radio > 300 || radio < 1) {
        crece = !crece;
    }
}, 10);

//ahora pero en vez de circulo cuadrado un rectangulo
const lienzo2 = document.querySelector('#lienzo2');
const ctx2 = lienzo2.getContext('2d');
let x2 = 0;
let y2 = 0;
let ancho = 50;
let alto = 50;
let creceX = true;
let creceY = true;
setInterval(() => {
    ctx2.clearRect(0, 0, lienzo2.width, lienzo2.height);
    ctx2.fillStyle = `hsl(${radio}, 50%, 50%)`;
    ctx2.fillRect(x2, y2, ancho, alto);
    if (creceX) {
        x2++;
    } else {
        x2--;
    }
    if (creceY) {
        y2++;
    } else {
        y2--;
    }
    if (x2 + ancho > lienzo2.width || x2 < 0) {
        creceX = !creceX;
    }
    if (y2 + alto > lienzo2.height || y2 < 0) {
        creceY = !creceY;
    }
}, 10);

