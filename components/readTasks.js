import { createTask } from './addTask.js';
import { uniqueDates } from '../services/date.js';
import dateElement from './dateElement.js';

export const displayTasks = () => {
  const list = document.querySelector('[data-list]');
  



  const tasksList = JSON.parse(localStorage.getItem('tasks')) || [];
  const dates = uniqueDates(tasksList)


  //Por cada fecha unica, generar la estructura
  dates.forEach((date) =>{
    const dateMoment = moment(date, "DD/MM/YYYY")
    //Transformamos la fecha unica a Moment
    list.appendChild(dateElement(date)) //Por cada task agregado se incorpora la fecha
    tasksList.forEach((task) => {
      const taskDate = moment(task.dateFormat,  "DD/MM/YYYY")
      //transformamos la fecha de cada task a moment
      const diff = dateMoment.diff(taskDate)
      //Usamos el metodo diff de la libreria moment para comparar si son iguales o no
      


      //Finalmente, condicionamos que solo agregue la tarea en caso que diff sea igual 0, es decir, las fechas coinciden
      if(diff==0){
        list.appendChild(createTask(task));

      }
      
      
    });
  })

  
};
