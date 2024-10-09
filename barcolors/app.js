function actualizarPropiedades() {
    // Obtener elementos del DOM
    const miDiv = document.getElementById('miDiv');
    const alto = document.getElementById('Alto').value;
    const ancho = document.getElementById('Ancho').value;
    const sombra = document.getElementById('Sombra').value;
    const radio = document.getElementById('Radio').value;
    const borde = document.getElementById('Borde').value;
    const opacidad = document.getElementById('Opacidad').value;
    const colorFondo = document.getElementById('ColorFondo').value;

    // Actualizar el div con las nuevas propiedades
    miDiv.style.height = alto + 'px';
    miDiv.style.width = ancho + 'px';
    miDiv.style.boxShadow = `0px 0px ${sombra}px rgba(0, 0, 0, 0.5)`;
    miDiv.style.borderRadius = radio + 'px';
    miDiv.style.borderWidth = borde + 'px';
    miDiv.style.opacity = opacidad;
    miDiv.style.backgroundColor = `hsl(${colorFondo}, 100%, 50%)`; // Asegúrate de que colorFondo sea un valor válido

    // Actualizar los valores mostrados al usuario
    document.getElementById('valorAlto').textContent = alto;
    document.getElementById('valorAncho').textContent = ancho;
    document.getElementById('valorSombra').textContent = sombra;
    document.getElementById('valorRadio').textContent = radio;
    document.getElementById('valorBorde').textContent = borde;
    document.getElementById('valorOpacidad').textContent = opacidad;
    document.getElementById('valorColorFondo').textContent = colorFondo;
}

