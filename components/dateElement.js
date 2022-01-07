export default (date) =>{
const dateElement = document.createElement("li")
dateElement.classList.add("date") //le añadimos una clase al dateElement
dateElement.innerHTML = date
return dateElement
}