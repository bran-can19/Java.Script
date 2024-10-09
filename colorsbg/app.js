const body = document.querySelector('body');
const btnChange = document.getElementById('btnchange');

const changeColor = () => {
    body.style.backgroundColor = color;
}

btnChange.addEventListener('click', changeColor);

const random = () => {
    return Math.floor(Math.random() * 256);
}
const randomColor = () => {
    const color = `rgb(${random()}, ${random()}, ${random()})`;
    return color;
}

const changeColorRandom = () => {
    const color = randomColor();
    body.style.backgroundColor = color;
}

btnChange.addEventListener('click', changeColorRandom);

