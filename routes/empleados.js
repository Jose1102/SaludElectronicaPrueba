//File: routes/tvshows.js

module.exports = function (app) {
  var Empleados = require("../models/empleado.js");

  //GET - consultar todos los empleados
  findAllEmpleados = function (req, res) {
    Empleados.find(function (err, empleado) {
      if (!err) {
        res.send(empleado);
      } else {
        console.log("ERROR: " + err);
      }
    });
  };

  //GET - consultar por el Id de empleado
  findById = function (req, res) {
    console.log("Get findByIdEmpleado");
    const id = req.params.id;
    Empleados.findById(id, (error, empleado) => {
      if (error) {
        console.log(error);
      } else {
        console.log(empleado);
        res.send(empleado);
      }
    });
  };

  //POST - agregar empleado
  addEmpleado = function (req, res) {
    console.log("POST");
    console.log(req.body);
    var empleado = new Empleados({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      fechaNacimiento: req.body.fechaNacimiento,
      sexo: req.body.sexo,
      fechaIngreso: req.body.fechaIngreso,
      estrato: req.body.estrato,
    });

    empleado.save(function (err) {
      if (!err) {
        console.log("Created");
      } else {
        console.log("ERROR: " + err);
      }
    });

    res.send(empleado);
  };

  //PUT - actualizar empleado
  updateEmpleado = function (req, res) {
    let idUpdate = req.params.id;
    Empleados.findOneAndUpdate(
      { _id: idUpdate },
      {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fechaNacimiento: req.body.fechaNacimiento,
        sexo: req.body.sexo,
        fechaIngreso: req.body.fechaIngreso,
        estrato: req.body.estrato,
      },
      (error, empleado) => {
        if (error) {
          console.log(error);
        } else {
          console.log(empleado);
          res.send(empleado);
        }
      }
    );
  };

  //DELETE - Borrar empleado
  deleteEmpleado = function (req, res) {
    let idDelete = req.params.id;
    Empleados.findOneAndRemove({ _id: idDelete }, (error, empleado) => {
      if (error) {
        console.log(error);
      } else {
        console.log(empleado);
        res.send(empleado);
      }
    });
  };

  //punto de entrada de los metodos
  app.get("/empleados", findAllEmpleados);
  app.get("/empleado/:id", findById);
  app.post("/empleado", addEmpleado);
  app.put("/empleado/:id", updateEmpleado);
  app.delete("/empleado/:id", deleteEmpleado);
};
