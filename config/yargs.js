const descripcion = {
    demand:true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
}

const completado ={
    demand:false,
    alias: 'c',
    default: true,
    desc: 'Flag que indica si la tarea esta completada'
}
const opts1= {
    descripcion: descripcion
}

const opts2= {
    descripcion: descripcion,
    completado: completado
}

const argv = require('yargs')
            .command('listar', "Imprime lista de tareas",{})
            .command('crear', "Crea nueva tarea",opts1)
            .command('actualizar', "Actualiza estado de tarea",opts2)
            .command('borrar', "Borrar una tarea",opts1)
            .help()
            .argv;


module.exports ={
    argv
}