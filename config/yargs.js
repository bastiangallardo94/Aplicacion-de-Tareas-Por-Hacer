const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion: {
            alias: 'd',
            demand: true,
            desc: 'Descripción de la tarea por hacer'
        }
    })
    .command('actualizar', 'Genera las tablas de multiplicar', {
        descripcion: {
            alias: 'd',
            demand: true,
            desc: 'Descripción de la tarea por hacer'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .command('borrar', 'Borra una tarea de la lista', {
        descripcion: {
            alias: 'd',
            demand: true,
            desc: 'Descripción de la tarea por borrar'
        },

    })
    .help()
    .argv;


module.exports = {
    argv
}