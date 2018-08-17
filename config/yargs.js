const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprimir en consola la tabla de multiplicar', opts)
    .command('Crear', 'Crea un archivo de la tabla Base hasta el Limite', opts)
    .help()
    .argv;

module.exports = {
    argv
}