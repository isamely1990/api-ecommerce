var express = require('express');
var router = express.Router();
var db = require('../bin/mysql'); 
/* const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken'); */

/* GET users listing. */
/* router.get('/signin', function(req, res, next) {
  res.render('registro', { title: 'Registro de usuario' });
});  */

/** ALTA DE USUARIO */
router.post('/signin', function (req, res, next) {
  db.query("INSERT INTO contactos (nombre, email, password, calle, altura_depto, ciudad, provincia, cod_postal) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",[req.body.nombre, req.body.email, req.body.password, req.body.calle, req.body.altura, req.body.ciudad, req.body.provincia, req.body.postal], function (error, result) {
      console.log(error, result);
      console.log(req.body)
  }
  );
  console.log(req.body)
});

module.exports = router;
