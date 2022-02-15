require("./connection");
require("./models/empleado.js");

//var Empleados = require("./models/empleado.js");

var express = require("express"),
  app = express(),
  http = require("http"),
  server = http.createServer(app),
  mongoose = require("mongoose");

app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.get("/", function (req, res) {
  res.send("Mucha suerte, el equipo de SALUDE ELECTRÓNICA te espera");
});

routes = require("./routes/empleados")(app);



//console.log(empleadoNuevo);

server.listen(3000, function () {
  console.log("Servidor arriba en http://localhost:3000");
});
