const request = require('request');
const vars = require('./vars.js')

const geocode = (address, callback) => {
    request({
        url: 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=' + vars.geocodeAPI + '&limit=1',
        json: true
    }, (e, {body}) => {
        console.log('callback')
        if (e) {
            callback('Unable to connect', undefined);
        } else if (body.features.length === 0) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;