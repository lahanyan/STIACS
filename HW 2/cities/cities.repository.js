const axios = require('axios');

module.exports = {
     async getCityDataByZipCode(zipCode) {

        let city;
        try{
            city = await axios.get(`https://api.zippopotam.us/us/${zipCode}`);
        } catch{
            return undefined;
        }
        
        return city;
    }
      
}
