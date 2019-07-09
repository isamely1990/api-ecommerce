var express = require('express');
var router = express.Router();
var db = require('../bin/mysql');

/* GET HOME PAGE CON ULTIMOS 3 PRODUCTOS */
router.get('/', function(req, res, next) {
  db.query("SELECT * FROM productos ORDER BY id DESC LIMIT 2 ", function(error, result){
    console.log(error, result);
    res.json(result);
  })
  
});

module.exports = router;
