const {argv} = require('./config/yargs');
const {crear, listar, actualizar, borrar} = require('./to-do/to-do');
const colors = require('colors');

console.log(argv);

let comando = argv._[0];
let desc = argv.descripcion;
let completado = argv.completado;

console.log(`descripcion: ${desc}`);

switch (comando) {
    case 'listar': 
        console.log(comando);
        let lista = listar();
         
        for (let task of lista){
            
            console.log('*****************'.green);
            console.log(`Descripcion: ${task.descripcion}`);
            console.log(`Estado: ${task.completado}`);
            console.log('*****************'.green);
        }
    
        break;
    case 'crear':
        console.log(comando);
        let task = crear(desc);
        console.log(task);
        break;
    case 'actualizar':
        console.log(comando);
        actualizar(desc, completado);
        break;
    case 'borrar':
        console.log(comando);
        borrar(desc);

        break;
    default:
        console.log("Comando no reconocido. node app [listar|crear|actualizar] ");

    
}
