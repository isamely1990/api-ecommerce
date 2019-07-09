var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/signin', function(req, res, next) {
  res.render('registro', { title: 'Registro de usuario' });
});

/** ALTA DE USUARIO */
router.post('signin', function (req, res, next) {
  db.query("INSERT INTO usuarios (nombre, email, pass) VALUES (?, ?, ?)",[req.body.nombre, req.body.mail, req.body.password ], function (error, result) {
      console.log(error, result);
      console.log(req.body)
  }
  );
  res.send('gracias por su mensaje');
  console.log(req.body)
});

module.exports = router;
