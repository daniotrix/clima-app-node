const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({

    direccion: {
        alias: 'd',
        desc: 'Ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfor = async(direccion) => {
    try {
        let coordenadas = await lugar.getLugLatLgn(direccion);
        let temperatura = await clima.getTemperatura(coordenadas.longitud, coordenadas.lactitud);
        return `El clima en: ${coordenadas.direccion} es de: ${temperatura}`;

    } catch (error) {
        return `No se pudo encontrar el clima para la direccion: ${direccion}`
    }
}

getInfor(argv.direccion).then(mensaje => console.log(mensaje)).catch(err => console.log(err));