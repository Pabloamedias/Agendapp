import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';

export const addTask = (evento) => {
  evento.preventDefault();

  const list = document.querySelector('[data-list]');
  const input = document.querySelector('[data-form-input]');
  const calendar = document.querySelector('[data-form-date]'); //Accedemos al elemento hmtl

  const value = input.value;
  const date = calendar.value; //almacemamos el valor del elemento en una constante
  const dateFormat = moment(date).format('DD/MM/YYYY'); //Convertimos el valor a un formato nuevo con la librería Moment

  input.value = '';
  calendar.value = '';

  const taskObj = {
    value,
    dateFormat,
  };
  //creamos un objeto que almacenara los valores de la tarea y la fecha

  const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
  //accede al local storage, recibe como parametro el nombre de la llave que buscamos
  //Las lineas || permiten que, en caso de obtener null desde el metodo, generen un arreglo vacio, así podemos seguir haciendo push
  //JSON parse toma el formato string con elo que lo habiamos guardado previamente, y lo retorna como un objeto que si puede leer HTML
  taskList.push(taskObj);
  localStorage.setItem('tasks', JSON.stringify(taskList));

  const task = createTask(taskObj); //createtask ahora recibe la lista almacenada como parametro
  list.appendChild(task); //selecciona la lista y añade el elemento
};

export const createTask = ({ value, dateFormat }) => {
  const task = document.createElement('li');
  task.classList.add('card');

  const taskContent = document.createElement('div');

  const titleTask = document.createElement('span'); //Creamos un elemento span
  titleTask.classList.add('task');
  titleTask.innerText = value;
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);

  const dateElement = document.createElement('span');
  dateElement.innerHTML = dateFormat;

  task.appendChild(taskContent);
  task.appendChild(dateElement);
  task.appendChild(deleteIcon());
  return task;
};
