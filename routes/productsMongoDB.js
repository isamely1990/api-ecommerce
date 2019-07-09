var express = require('express');
var router = express.Router();
/** MONGOOOO ---------------------------------------------------- */
// Llamo al modelo que contiene la conexión a la DB
var Productos_model = require('../models/productos_models')
var p = new Productos_model


/* LEVANTO TOTAL PRODUCTOS */
router.get('/', function (req, res, next) {
  p.getProducts();
});

/* ALTA DE PRODUCTOS */
router.get('/create', function (req, res, next) {
  res.render('alta', { title: 'Alta de Productos' });
});

router.post('/create', function (req, res) {
  var producto = new Producto({
    nombre: req.body.nombre,
    detalle: req.body.detalle,
    precio: req.body.precio
  })
  // Insertar producto
  producto.save(function (error) {
    if (error) {
      return reject(error);
    } else {
      res.send('Producto insertado');
    }
  });
});


/* DETALLE DE PRODUCTOS */
router.get('/detail/:id([0-9]+)', function (req, res, next) {
  /* db.query("SELECT * FROM productos WHERE id=?", [req.params.id], function (error, result) {
    console.log(result)
    res.render('detalle', { detalles: result });
  }) */

  Producto.findById()

});

/** BUSCADOR DE PRODUCTOS */
router.post('/', function (req, res, next) {
  var keyword = ("%" + req.body.buscar + "%")
  db.query("SELECT * FROM productos WHERE nombre LIKE ?", [keyword], function (error, result) {
    console.log(error, result)
    res.render('productos', { title: 'Productos', productos: result });
  })

});

module.exports = router;
