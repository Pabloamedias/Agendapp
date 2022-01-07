//Este funcion nos permite obtener las fechas unicas, de forma que generen sin repetirse
export const uniqueDates = (tasks) =>{
    const unique = []
    
    tasks.forEach((task) =>{
        if (!unique.includes(task.dateFormat)) unique.push(task.dateFormat);
        //si NO existe esta fecha, se agrega
    })
    return unique;
    
    
    
}