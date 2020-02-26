const fs= require('fs');

const nameFile = "./db/data.json";
let listaToDo=[];

const loadData = () => {

    try {
        listaToDo= require("../db/data.json");
    } catch (error){
        listaToDo=[];
    }

}

const saveData = () =>{
    let data = JSON.stringify(listaToDo);
    console.log(`data: ${data}`);


    fs.writeFile(nameFile, data, (err) => {
        if (err) console.log(err);
        else {
            console.log("archivo actualizado ".green + `${nameFile}`.red);
            return nameFile;
        }
    })

}

const crear= (descripcion) => {
    loadData();
    let task = {
        descripcion,
        completado: false
    }

    listaToDo.push(task);
    saveData();
    return task;
}

const listar = () =>{
    loadData();
    
    return listaToDo;

}

const actualizar = (descripcion, completado = true) => {

    loadData();

    let index = listaToDo.findIndex(task => task.descripcion===descripcion);
    console.log(`index ${index}`);
    if (index >=0){
        listaToDo[index].completado=completado;
        saveData();
    }


}

const borrar = (descripcion) => {
    console.log(`descripcion para borrar: ${descripcion}`);
    loadData();

    let newList = listaToDo.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });

    console.log('******************'.red);
    console.log(newList);
    console.log('******************'.red);
    if (newList.length=== listaToDo.length){
        return false;
    }
    else{
        listaToDo=newList;
        saveData();
        return true;
    }

}

module.exports ={
    crear,
    listar,
    actualizar,
    borrar
}