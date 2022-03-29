const NotFoundError = require('../errors/not-found.error');
const citiesRepository = require('./cities.repository');

module.exports = {
    async getCityByZipCode(zipCode){
        const city = await citiesRepository.getCityDataByZipCode(zipCode);
        
        if(!city){
            throw new NotFoundError(`No cities found!`); 
        }
        return `${city.data.places[0]["place name"]}, ${city.data.places[0]["state abbreviation"]}, ${city.data.country}`;
    }
}
