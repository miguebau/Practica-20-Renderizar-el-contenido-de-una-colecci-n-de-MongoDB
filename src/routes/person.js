let express = require('express');
let router = express.Router(); //usamos export.Router 
const mongoose = require('mongoose');
let Person = require('../models/person'); // importamos nuestro esquema 

router.post('/personJson', express.json({ type: '*/*' }), (req, res) => {
    console.log(`Nombre: ${req.body.Nombre}\nApellido: ${req.body.Apellido}`) //Mostramos la informacion 
});

router.get('/testJson', (req, res) => {
    res.render('testJson');
})

router.get('/gente', async(req, res) => {
    let data = await Person.find({});
    res.render('index', { data })

});


module.exports = router; //exportamos el router