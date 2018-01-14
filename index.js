const express = require('express')
const app = express()
const path = require('path')

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

app.use(express.static(path.join(__dirname, 'public')));
app.use(allowCrossDomain);

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'))
app.get('/mods', (req, res) => res.sendFile(__dirname + '/views/mods.html'))
app.get('/mods/mistcore/releases', (req, res) => res.sendFile(__dirname + '/views/mods/mcreleases.html'))
app.get('/mods/mistbiomes/releases', (req, res) => res.sendFile(__dirname + '/views/mods/mbreleases.html'))
app.get('/mods/nmclc/releases', (req, res) => res.sendFile(__dirname + '/views/mods/nmclcreleases.html'))
app.get('/mods/wasteland/releases', (req, res) => res.sendFile(__dirname + '/views/mods/wrreleases.html'))

app.use("*", function (req, res) {
  res.sendFile(__dirname + "/views/404.html");
});

app.listen(80, () => console.info('[Modding Website] Listening on port 80'))