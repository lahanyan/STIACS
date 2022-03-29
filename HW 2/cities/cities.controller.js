const express = require('express');
const citiesService = require('./cities.service');
const asyncHandler = require('express-async-handler');
const route = express.Router();

route.get('/:zipCode/', asyncHandler(async (req, res) => {
    const index = req.params['zipCode'];
    const city = await citiesService.getCityByZipCode(index);
    res.send(city);

}))

route.get('/', (req, res) => {
    res.send('Please provide the ZipCode!');
})

module.exports = route;
