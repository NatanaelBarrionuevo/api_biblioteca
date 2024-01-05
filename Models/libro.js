const Mongoose = require('mongoose');

Mongoose.connect('mongodb+srv://natobarrionuevo:Vatecp-mongo@cluster0.jyvyhlf.mongodb.net/biblioteca');
Mongoose.connection.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));

const LibroEsqumea = new Mongoose.Schema({    
    codigo: Number,
    titulo: String,
    autor: String,
    activo: Boolean   
}, {collection: 'libros'});

const Libro = Mongoose.model('libro', LibroEsqumea);

module.exports = Libro;