let express = require('express');
let router = express.Router(); //usamos export.Router 
const mongoose = require('mongoose');
let Person = require('../models/person'); // importamos nuestro esquema 

router.post('/personJson', express.json({ type: '*/*' }), (req, res) => {
    console.log(`Nombre: ${req.body.Nombre}\nApellido: ${req.body.Apellido}`) //Mostramos la informacion 
});

router.get('/', async(req, res) => {
    let data = await Person.find({}); // Crear una consulta a mongo
    res.render('index', { data })
});


router.get('/student', (req, res) => {
    res.render('student'); // creamos vista
});

router.post('/addStudent', (req, res) => {
    const persona = Person({ "Nombre": req.body.nombre, "Edad": req.body.edad, "Nss": req.body.nss, "TpSangre": req.body.tpSangre })

    persona.save().then(() => { res.redirect('/'); }); // Con este comando podemos guardar el nuevo documento en mongoDB atlas
})


module.exports = router; //exportamos el router