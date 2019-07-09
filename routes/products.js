var express = require('express');
var router = express.Router();
var db = require('../bin/mysql'); //AL USAR UN MODELO YA NO IMPORTO EL MODULO MYQSQL ACÀ
//var Productos_model = require('../models/productos_models')
//var p = new Productos_model


/* TOTAL PRODUCTOS */
router.get('/all', function (req, res, next) {
  db.query("SELECT * FROM productos", function (error, result) {
    res.json(result);
  })
});

/* PRODUCTOS DESTACADOS */
router.get('/destacados', function (req, res, next) {
  db.query("SELECT * FROM productos WHERE destacado LIKE 'si'", function (error, result) {
    res.json(result);
  })
});

/* PRODUCTOS POR CATEGORIA */
router.get('/categoria/:id([0-9]+)', function (req, res, next) {
  db.query("SELECT * FROM productos WHERE id_categoria=?", [req.params.id], function (error, result) {
    res.json(result);
  })
});


/* DETALLE DE PRODUCTOS */
router.get('/detalle/:id([0-9]+)', function (req, res, next) {
  db.query("SELECT * FROM productos WHERE id=?", [req.params.id], function (error, result) {
    res.json(result);
  })
});

/** BUSCADOR DE PRODUCTOS */
router.post('/buscar', function (req, res, next) {
  var keyword = ("%" + req.body.buscar + "%")
  db.query("SELECT * FROM productos WHERE nombre LIKE ?", [keyword], function (error, result) {
    res.json(result);
  })

});

/* ALTA DE PRODUCTOS */
router.post('/alta', function (req, res, next) {
   db.query("INSERT INTO productos (id_categoria, nombre, detalle, precio, destacado) VALUES (?,?,?,?,?)", [req.body.categoria, req.body.nombre, req.body.detalle, req.body.precio, req.body.destacado], function (error, result) {
    console.log(error, result)
  })
  res.json(result);
});

module.exports = router;
