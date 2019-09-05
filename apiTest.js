var unirest = require("unirest");

var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/fixtures/league/4");

req.headers({
	"x-rapidapi-host": "https://api-football-v1.p.rapidapi.com/v2/",
	"x-rapidapi-key": "816cdd5095mshe40103562c0399cp1b5c49jsn5661213abd50"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});