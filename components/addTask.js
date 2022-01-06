import checkComplete from 'checkComplete.js';
import deleteIcon from 'deleteIcon.js';

export const addtask = (evento) =>{
    const list = document.querySelector('[data-list]');
    const task = createTask(evento)
    list.appendChild(task);
  
  }
  
  
 
  
  const createTask = (evento) => {

    evento.preventDefault();
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    //accede al local storage, recibe como parametro el nombre de la llave que buscamos
    //Las lineas || permiten que, en caso de obtener null desde el metodo, generen un arreglo vacio, así podemos seguir haciendo push
    //JSON parse toma el formato string con elo que lo habiamos guardado previamente, y lo retorna como un objeto que si puede leer HTML

    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]'); //Accedemos al elemento hmtl
    const date = calendar.value //almacemamos el valor del elemento en una constante
    const dateFormat = moment(date).format("DD/MM/YYYY") //Convertimos el valor a un formato nuevo con la librería Moment
    const dateElement = document.createElement("span") //Creamos un elemento span
    dateElement.innerHTML = dateFormat
    const value = input.value;
    
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = '';
    //backticks
    const taskContent = document.createElement('div');
    const taskObj = { //creamos un objeto que almacenara los valores de la tarea y la fecha
      value,
      dateFormat,
  
    }
  
    taskList.push(taskObj)
    //Con el metodo push agregamos los objetos al arreglo, mas abajo mandamos taskList en vez de taskObj
  
  
    localStorage.setItem("tasks", JSON.stringify(taskList))
    //API  de almacenamiento en el navegador, el 1er parametro es el nombre del objeto donde se almacenaran los datos(key), el segundo recibe el objeto en cuestion
  
    //Usamos la librería JSON y el metodo stringfy, ya que ambos parametros del metodo setitem deben estar en formato String
  
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    // task.innerHTML = content;
  
    task.appendChild(taskContent);
    task.appendChild(dateElement); //Agregamos span a la estructura
    task.appendChild(deleteIcon());
    return task
    
  };