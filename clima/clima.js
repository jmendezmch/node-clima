const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=5778691cac7237d87a2baf45f7d43a25`);
    return resp.data.main.temp;
    // console.log(resp);
}

module.exports = {
    getClima
}