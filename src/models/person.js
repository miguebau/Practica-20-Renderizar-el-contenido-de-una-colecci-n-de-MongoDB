const mongoose = require('mongoose');

let personSchema = new mongoose.Schema({
    Nombre: String,
    Edad: String,
    TpSangre: String,
    Nss: String
}); // Creamos un esquema para consultas

module.exports = mongoose.model('Persons', personSchema); //exportarmos el valor 'Persons'