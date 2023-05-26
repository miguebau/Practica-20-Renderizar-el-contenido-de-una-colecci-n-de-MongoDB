let express = require('express'); //importamos express
const mongoose = require('mongoose'); // importamos mongoose 

//Rutas
let indexRoute = require('./routes/index');
let personsRoutes = require('./routes/person'); //definimos una variable 
let studentRoutes = require('./routes/student');

mongoose.Promise = global.Promise;
let app = express();
let port = process.env.PORT || 3000;
require('dotenv').config();


mongoose.connect(process.env.MONGODB).then(() => console.log("Base en linea")).catch((err) => console.log(err)); //con la funcion connect de mongoose pegamos nuestra variable de entorno que creamos y si conecta con exito mostramos un mensaje y si no mostramos el error

app.use('/assets', express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs');
app.use('/', (req, res, next) => {
    console.log('Request URL:' + req.url);
    next()
});


//Redireccion
app.use(indexRoute)
app.use(personsRoutes);
app.use(studentRoutes);

app.listen(port, () => { console.log("Servidor en linea") }); // Inicamos el server