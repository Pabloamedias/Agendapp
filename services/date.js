//Este funcion nos permite obtener las fechas unicas, de forma que generen sin repetirse
export const uniqueDates = (tasks) =>{
    const unique = []
    
    tasks.forEach((task) =>{
        if (!unique.includes(task.dateFormat)) unique.push(task.dateFormat);
        //si NO existe esta fecha, se agrega
    })
    return unique;
    
    
    
}

//Esta funcion se encargara de ordenar las fechas antes de enviarlas
export const orderDates = (dates) => {
    //Sort es un metodo de los arrays, permite ordenar los arreglos
    return dates.sort((a, b) =>{
        const firstDate = moment(a,"DD/MM/YYYY")
        const secondDate = moment(b,"DD/MM/YYYY")
        return firstDate -secondDate

    })
}