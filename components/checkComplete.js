const checkComplete = (id ) => {
  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square', 'icon');
  i.addEventListener('click', (event) => completeTask(event, id));
  return i;
};
// Immediately invoked function expression IIFE
const completeTask = (event, id) => {
  const element = event.target;
  element.classList.toggle('fas');
  element.classList.toggle('completeIcon');
  element.classList.toggle('far');
  const tasks = JSON.parse(localStorage.getItem("tasks"))
  // con esta funcion logramos saber la posicion de una tarea dentro del arreglo
  const index = tasks.findIndex( item => item.id== id)
  //Con esto cambiamos su estado segun hagamos click, de true a false y viceversa
  tasks[index]["complete"] = !tasks[index]["complete"]
  //Ahora guardamos esta informacion en el localStorage
  localStorage.setItem("tasks",  JSON.stringify(tasks));

};

export default checkComplete;
