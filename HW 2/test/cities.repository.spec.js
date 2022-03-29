const sinon = require('sinon') ;
const axios = require('axios');
const chai = require('chai');
const sinonChai = require("sinon-chai");
chai.use(sinonChai);

const { getCityDataByZipCode } = require('../cities/cities.repository');


describe('testing cities repository', () => {
  it('called exactly once', async () => {

    const sub = sinon.stub(axios, 'get').callsFake(() => Promise.resolve({ status: 200 }));

    await getCityDataByZipCode('94122');

    chai.expect(sub).to.have.been.calledOnceWithExactly(`https://api.zippopotam.us/us/94122`); 
  });
  

});
