const request = require('request');
const vars = require('./vars.js')


const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/'+ vars.weatherAPI + '/' + latitude + ',' + longitude;
    request({
        url,
        json: true
    }, (error, {body}) => {
        if (error) {
            callback('Error', undefined);
        } else if (body.error) {
            callback('Cannot find location', undefined);
        } else {
            callback(undefined, {
                summary: body.daily.data[0].summary,
                currentTemp: body.currently.temperature,
            });
        }
    });
};

module.exports = forecast;