const tareasDiv = document.querySelector('.tareas');
const myForm = document.querySelector('#form');
const inputTarea = document.querySelector('#inputtarea');

let arrayTareas = JSON.parse(localStorage.getItem('tareas')) || [];

const addTarea = () => {
    const tarea = inputTarea.value.trim();
    if (!tarea) return; // Evitar tareas vacías

    const newTarea = {
        tarea: tarea,
        estado: 'red',
        id: Date.now() // Usar Date.now() para un ID único
    };

    arrayTareas.push(newTarea);
    localStorage.setItem('tareas', JSON.stringify(arrayTareas));
    creaDivs();
    inputTarea.value = '';
};

const creaDivs = () => {
    tareasDiv.innerHTML = '';
    arrayTareas.forEach(tarea => {
        tareasDiv.appendChild(crarObjeto(tarea));
    });
};

const eliminaObjeto = e => {
    const button = e.target;
    const papa = button.parentElement;
    const id = papa.getAttribute('data-id');
    arrayTareas = arrayTareas.filter(t => t.id !== Number (id))
    localStorage
            .setItem('tareas', JSON.stringify(arrayTareas));
            papa.remove();
}

const changeColor = e => {
    const myDiv = e.currentTarget;
    const id = Number(myDiv.getAttribute('data-id'));
    const idTarea = arrayTareas.findIndex(t => t.id === id);

    if (idTarea === -1) return; // Verificar si la tarea existe

    if (myDiv.classList.contains('red')) {
        myDiv.classList.remove('red');
        myDiv.classList.add('yellow');
        arrayTareas[idTarea].estado = 'yellow';
    } else if (myDiv.classList.contains('yellow')) {
        myDiv.classList.remove('yellow');
        myDiv.classList.add('green');
        arrayTareas[idTarea].estado = 'green';
    }
    localStorage.setItem('tareas', JSON.stringify(arrayTareas));
};

const crarObjeto = (tarea) => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.innerText = tarea.tarea;

    const button = document.createElement('button');
    button.innerText = 'Eliminar';
    button.addEventListener('click', eliminaObjeto);
    
    div.appendChild(p);
    div.appendChild(button);
    div.classList.add('alert', tarea.estado); // Combinar clases
    div.setAttribute('data-id', tarea.id);
    div.addEventListener('click', changeColor);
    
    return div;
};

creaDivs();

myForm.addEventListener('submit', e => {
    e.preventDefault();
    addTarea();
});
