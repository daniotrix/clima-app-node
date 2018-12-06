const axios = require('axios');

const getLugLatLgn = async(direccion) => {
    let encodeURL = encodeURI(direccion);
    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}&key=AIzaSyCufD4zb9hO3_2FobIbJJO5klE4bXvr_Q0`)
    if (respuesta.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    let locationjs = respuesta.data.results[0];
    let coordenadas = locationjs.geometry.location;
    return {
        direccion: locationjs.formatted_address,
        lactitud: coordenadas.lat,
        longitud: coordenadas.lng

    }

}

module.exports = {
    getLugLatLgn
}