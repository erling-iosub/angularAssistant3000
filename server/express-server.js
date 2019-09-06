`use strict`

const express = require(`express`)
const request = require("request");
const path = require(`path`)
const bodyParser = require("body-parser")
const appPath = path.normalize(__dirname+"/../app")
const externalResPath = path.normalize(__dirname+"/../")

const server = express();

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json());
server.use(express.static(appPath));
server.use(express.static(externalResPath));

//proxy football api
server.get('/football', (req, res) => {
  var options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v2/leagues/season/2019',
    headers: {
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
      'x-rapidapi-key': '6fd07f456fmshf94d24fd0dde8bap1bfc8djsn749da2127471'
    }
  }
  request( options, (error,response,body) => {
      if (!error && response.statusCode === 200) {
        res.send(body)
        res.end();
      }
    })
})

//proxy for weather App
server.get('/weather', (req, res) => {
  request(`https://api.darksky.net/forecast/826e6c1a03c8a1bc134b1956748b1021/44.4268,26.1025?units=si&exclude=minutely,daily,hourly`,
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        res.send(body)
        res.end();
      }
    });
});

//proxy for Exchange App
server.get('/exchange', (req, res) => {
  request(`https://api.exchangeratesapi.io/latest`,
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        res.send(body)
        res.end();
      }
    });
});

server.listen(8000, () => {
  console.log(appPath)
  console.log(externalResPath)
  console.log("server on port 8000")
})