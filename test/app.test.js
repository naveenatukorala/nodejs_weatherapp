const expect = require('chai').expect;
const nock = require('nock');
const express = require('express');
const app = express();
const use = require('../app').use;
var res;

describe('Get weather details', () => {
  beforeEach(function () {
    nock('http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=3c330ea3089059fcb33aad06e58b4cc0')
      .get('res.data.name')
      .reply(200, res);

  });

  it('Get weather by city', function()  {
     return module.exports = app; ('Dhaka')
        //expect an object backx

       //Test result of name, company and location for the response
     expect(res.data.name).to.equal('Dhaka')

      });
  });
