const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

const ball = {
    x: 0,
    y: 0,
    show: function () {
        ctx.fillStyle = `hsl(${this.x % 360}, 50%, 50%)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
        ctx.fill();
    }
};

let x = 10;
let y = 10;
let right = true;
let down = true;

setInterval(() => {
    // ctx.clearRect(0, 0, 600, 400);
    
    ball.x = x;
    ball.y = y;
    ball.show();

    // Validar movimiento en el eje X
    if (right) {
        x++;
    } else {
        x--;
    }

    // Validar movimiento en el eje Y
    if (down) {
        y++;
    } else {
        y--;
    }

    // Validar si toca el borde derecho
    if (x > 590) { // Ajustado para considerar el radio de la bola
        right = false;
    }
    // Validar si toca el borde izquierdo
    if (x < 10) { // Ajustado para considerar el radio de la bola
        right = true;
    }
    // Validar si toca el borde inferior
    if (y > 390) { // Ajustado para considerar el radio de la bola
        down = false;
    }
    // Validar si toca el borde superior
    if (y < 10) { // Ajustado para considerar el radio de la bola
        down = true;
    }
}, 2);
