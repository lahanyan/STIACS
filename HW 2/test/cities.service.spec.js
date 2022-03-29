const assert = require('assert');
const rewire = require('rewire');
const faker = require('faker');
faker.seed(123); //to give same values every time
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();
const citiesService = rewire('../cities/cities.service');

const NotFoundError = require('../errors/not-found.error');


describe('testing cities service', () => {
  describe('city service testing for pass', () => {
    it('city pass', async () => {

      const city = {data: {
        country: faker.address.country(),
        places: [{
                'place name': faker.address.city(),
                'state abbreviation': faker.address.stateAbbr(),
            }]
        } 
      };
      
      const citiesRepositoryMock = {
          getCityDataByZipCode: function(){return city}
      };


      citiesService.__set__("citiesRepository", citiesRepositoryMock);

      assert.deepEqual(await citiesService.getCityByZipCode(), 'Grantview, ID, Paraguay'); 
    });
  });

describe('city service testing for fail', () => {
    it('city fail', async () => {
      
      const city = undefined;
      const citiesRepositoryMock = {
          getCityDataByZipCode: function(){return city}
      };
      citiesService.__set__("citiesRepository", citiesRepositoryMock);
      return chai.expect(citiesService.getCityByZipCode()).to.be.rejectedWith(NotFoundError)

    });
  });

});