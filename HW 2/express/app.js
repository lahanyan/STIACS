const  citiesController = require('./cities/cities.controller');
const errorHandler = require('./middlewares/error-handler.middleware');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Please go to cities!');
})

app.use('/cities', citiesController);


app.listen(3000, () => {
    console.log('server is running 🛸')
})

app.use(errorHandler);

