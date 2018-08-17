const fs = require('fs');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        let data = '';

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base*index} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });

    })
}

let listarTabla = (base, limite) => {

    for (let index = 0; index <= limite; index++) {
        console.log(`${base} * ${index} = ${base*index}`);
    }

}

module.exports = {
    crearArchivo,
    listarTabla

}