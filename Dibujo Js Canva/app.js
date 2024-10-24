const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

// fillRect(x,y, ancho, alto)
// strokeRect(x, y, ancho, alto)
// arc(x,y, radio,ini, fin, sentidohorario)

// ctx.strokeRect(0,0,200,200);
// ctx.fillRect(20, 20, 160, 160);

// ctx.fillStyle = 'red';
// ctx.beginPath();
// ctx.arc(100, 100, 60, 0, Math.PI * 2, true);
// ctx.fill();

// ctx.fillStyle = 'yellow';
// ctx.beginPath();
// ctx.moveTo(80, 90);
// ctx.lineTo(130, 90);
// ctx.lineTo(105, 130);
// ctx.fill();

//emoji 

// ctx.fillStyle= ' black';
// ctx.beginPath();
// ctx.arc(300, 200, 50, 0, Math.PI * 2, true);
// ctx.fill();

// ctx.fillStyle= 'red';
// ctx.fillRect(270, 180, 20, 5);
// ctx.fillRect(310, 180, 20, 5);

// ctx.beginPath();
// ctx.arc(280, 190, 5, 0, Math.PI *2, true);
// ctx.fill();
// ctx.beginPath();
// ctx.arc(320, 190, 5, 0, Math.PI *2, true);
// ctx.fill();

// ctx.beginPath();
// ctx.arc(300, 200, 30, 0, Math.PI, false);
// ctx.fill();


// Fondo nocturno
ctx.fillStyle = 'darkblue'; // Cambiar el fondo a un color nocturno
ctx.fillRect(0, 0, lienzo.width, lienzo.height);

// Agregar estrellas (como cuadrados)
ctx.fillStyle = 'white';
for (let i = 0; i < 50; i++) {
    const x = Math.random() * lienzo.width;
    const y = Math.random() * lienzo.height;
    const size = Math.random() * 1 + 1; // Tamaño aleatorio de las estrellas
    ctx.fillRect(x, y, size, size); // Estrellas aleatorias como cuadrados
}

//luna
ctx.fillStyle = 'lightyellow';
ctx.fillRect(500, 50, 80, 80);

//fantasma

//1

ctx.beginPath();
ctx.roundRect(260, 20, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(280, 20, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(300, 20, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(320, 20, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(340, 20, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(360, 20, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

//2

ctx.beginPath();
ctx.roundRect(240, 40, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(340, 40, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

//3

ctx.beginPath();
ctx.roundRect(220, 60, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(220, 80, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(220, 100, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(340, 60, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(260, 80, 20, 20);
ctx.closePath();
ctx.fillStyle = 'black';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(300, 80, 20, 20);
ctx.closePath();
ctx.fillStyle = 'black';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(360, 80, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(360, 100, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

//4

ctx.beginPath();
ctx.roundRect(380, 120, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(400, 120, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(420, 120, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(420, 140, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(380, 180, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(400, 160, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(260, 120, 20, 20);
ctx.closePath();
ctx.fillStyle = 'black';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(280, 120, 20, 20);
ctx.closePath();
ctx.fillStyle = 'black';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(300, 120, 20, 20);
ctx.closePath();
ctx.fillStyle = 'black';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(200, 120, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(180, 120, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(160, 120, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(160, 140, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(180, 160, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(200, 180, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

//5

ctx.beginPath();
ctx.roundRect(200, 200, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(200, 220, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(360, 200, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(360, 220, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(360, 240, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(220, 240, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(240, 260, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(340, 260, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(340, 280, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(260, 280, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(280, 280, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(300, 300, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(320, 300, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(340, 300, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(360, 300, 20, 20);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

//lapida

ctx.fillStyle = ' gray';
ctx.fillRect(25, 350, 140, 15);

ctx.fillStyle = ' gray';
ctx.fillRect(25, 380, 140, 15);

ctx.fillStyle = ' gray';
ctx.fillRect(9, 365, 20, 18);

ctx.fillStyle = ' gray';
ctx.fillRect(160, 365, 20, 18);

ctx.fillStyle = ' gray';
ctx.fillRect(40, 350, 15, -120);

ctx.fillStyle = ' gray';
ctx.fillRect(135, 350, 15, -120);

ctx.fillStyle = ' gray';
ctx.fillRect(54, 215, 81.5, 15);

//Cruz

ctx.beginPath();
ctx.roundRect(90, 245, 12, 80);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.roundRect(65, 280, 60, 12);
ctx.closePath();
ctx.fillStyle = 'lightgray';
ctx.fill();
ctx.stroke();

