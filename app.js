const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
// const axios = require('axios');
// https: //api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=5778691cac7237d87a2baf45f7d43a25
let getInfo = async(direccion) => {
    try {
        let coords = await lugar.getLugarLatLng(direccion);

        let temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima en ${coords.direccion} es de ${temp}`;
    } catch (e) {
        return 'No se pudo determinar el clima en ' + direccion;
    }

}

getInfo(argv.d).then(mensaje => console.log(mensaje))
    .catch(e => console.log(e))
    // lugar.getLugarLatLng(argv.d).then(resp => {
    //     console.log(resp)

// }).catch(e => console.log(e));

// clima.getClima(resp.lat, resp.lng).then(cli => {
//     console.log(cli)
// });