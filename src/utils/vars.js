const request = require('request');

//---API KEYS---//
const geocodeAPI = 'pk.eyJ1Ijoiam9zZWNiIiwiYSI6ImNrNDJ3eWNqNTAxdXczZnBjeGp4N3ZkNWoifQ.Ytqo2dYZlWKz9ddbIjfbaA';
const weatherAPI = 'f04727cd1cb93bd45f031b739187b402'

//---API URLS---//
// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=' + vars.geocodeAPI + '&limit=1';
const url = 'https://api.darksky.net/forecast/${weatherAPI}/37.8267,-122.4233';

module.exports = {
    geocodeAPI:geocodeAPI,
    weatherAPI:weatherAPI,
    url:url
}