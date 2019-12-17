const path = require('path');
const express = require('express');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

//---LOAD EXPRESS---//
const app = express();

//---PATHS---//
const public = path.join(__dirname, '../public');
const views = path.join(__dirname, '../templates/views');
const title = {
    title: 'Weatherfy',
    name: 'Jose Beltran'
};

app
    .use(express.static(public))
    //View Egnine setup
    .set('view engine', 'hbs')
    .set('views', views)
    //Paths
    .get('', (req, res) => {
        res.render('index', title);
    })
    .get('/weather', (req, res) => {
        if (!req.query.address) {
            return res.send({error: 'Please provide a City Name / Location.'})
        }
        geocode(req.query.address, (error, {
            latitude,
            longitude,
            location
        } = {}) => {
            if (error) {
                return res.send({
                    error
                })
            }
            forecast(latitude, longitude, (error, forecastData) => {
                if (error) {
                    return res.send({error})
                }
                res.send({
                    forecast: forecastData,
                    location,
                    address: req.query.address
                })
            })
        })
    })
    .get('*', (req, res) => {
        res.send('Page not found.');
    })
    .listen(3000, () => {
        console.log('Server has started.');
    });