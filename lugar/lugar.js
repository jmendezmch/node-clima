const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodedUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error('No hay resultados');
    }
    let data = resp.data.results[0]
    return {
        direccion: data.formatted_address,
        lat: data.geometry.location.lat,
        lng: data.geometry.location.lng
    }
    // axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}`)
    //     .then(resp => {
    //         // console.log(JSON.stringify(resp.data, undefined, 2));
    //         console.log(resp.status);
    //         let data = resp.data.results[0]
    //             // console.log(data);
    //         console.log(data.formatted_address);
    //         console.log(data.geometry.location.lat);
    //         console.log(data.geometry.location.lng);
    //         return {

    //         }

    //     })
    //     .catch(e => console.log(e))
}



module.exports = {
    getLugarLatLng
}