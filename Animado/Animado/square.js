const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');


let x = 287;
let y = 198;
let width = 6;
let height = 4;
let crece = true;

setInterval(() => {
    // ctx.clearRect(0, 0, 600, 400);
    ctx.fillStyle = `hsl(${width},50%,50%)`;
    ctx.fillRect(x, y, width, height);
    if (crece) {
        width += 6;
        x -= 3;
        height += 4;
        y -= 2;
    }else{
        width -= 6;
        x += 3;
        height -= 4;
        y += 2;
    }
    crece = width >= 600?  !crece : crece;
    crece = width < 3?  !crece : crece;
}, 10);