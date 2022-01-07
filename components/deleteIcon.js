import { displayTasks } from "./readTasks.js";
const deleteIcon = (id) => {
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click', () => deleteTask(id));
  return i;
};

const deleteTask = (id) => {
  const li = document.querySelector("[data-list]")
 
  //Traemos la informacion de locaL storage y la almacenamos en una variable
  const tasks = JSON.parse(localStorage.getItem("tasks"))
  const index = tasks.findIndex((item)=> item.id==id)
  //Metodo nativo de los arrays parra eleminar elementos
  tasks.splice(index,1)

   //Limpiamos la lista una vez leida para no generare repeticiones
   li.innerHTML=""

   

  //Luego guardamos la informacion en localStorage
  localStorage.setItem('tasks', JSON.stringify(tasks));

 


  //Finalmente, llamamos la funcion displayTasks para que actualice la pagina con la informacion almacenada en localStorage
  displayTasks()
 
  

};

export default deleteIcon;
