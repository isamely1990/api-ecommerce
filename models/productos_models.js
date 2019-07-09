//var db = require('../bin/mysql')
var mongodb = require('../bin/mongo')

var ProductoSchema = mongodb.Schema({
    nombre: String,
    detalle: String,
    precio: Number
  })

var Producto = mongodb.model('Producto', ProductoSchema)

module.exports = class productos_model {
    getProducts(){
        Producto.find({}, function(error, result){
            if (error){
              return reject(error)
            } else {
              res.render('productos', { title: 'Productos', productos: result });
            }
          })
    }
}