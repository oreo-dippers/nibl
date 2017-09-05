var app = require('./server-config');

var port = 3006;
app.listen(port, function () {
  console.log(`listening on http://localhost:${port}`)
})