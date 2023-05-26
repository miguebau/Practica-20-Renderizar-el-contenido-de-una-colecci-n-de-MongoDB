let express = require('express'); //iniciamos express
let router = express.Router(); //Usamos el Router de express 

router.get('/student', (req, res) => {
    res.render('student'); // creamos una nueva vista ejs para recibir datos
});

router.post('/addStudent', (req, res) => { //Cuando usamos el metodo Post tambien debemos usarlo con express
    res.render('displayData', { Nombre: req.body.nombre, Edad: req.body.edad, NSS: req.body.nss, TpSangre: req.body.tpSangre }); // cambiamos res.send por render para mostrar los datos en un hmtl y mandamos los datos con res.body
})

module.exports = router;