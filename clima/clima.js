const axios = require('axios');

const getTemperatura = async(longitud, latitud) => {
    let uriclima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&units=metric&appid=dd2076e43cae6598c8a4c837f975b8fa`)
    if (uriclima.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    let dataClima = uriclima.data.main;
    let temperatura = dataClima.temp;
    return temperatura;
}
module.exports = {
    getTemperatura
}