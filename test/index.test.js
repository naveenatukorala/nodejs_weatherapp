const expect = require('chai').expect;
const nock = require('nock');


const app  = require('../app');
var resp;



describe('Get weather details', () => {
  beforeEach(() => {
    nock('http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=3c330ea3089059fcb33aad06e58b4cc0')
      app.use('/city/Dhaka')
      .reply(200, resp);
  });

  it('Get weather by city', () => {
     app.use
      .then(resp => {
        //expect an object back
        expect(typeof resp).to.equal('object');

        //Test result of name, company and location for the response
        expect(resp.name).to.equal('Dhaka')

      });
  });
});
