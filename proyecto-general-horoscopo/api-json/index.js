const express = require('express');
const {urlencoded, json} = require('express');
console.log("Ruta absoluta de signos.routes.js:", __dirname + '/routes/signos.routesjs');

const router = require('./routes/signos.routes.js');

const cors = require('cors');

const app = express();

app.use(urlencoded({extended: true}))
app.use(json())

app.use(cors())
app.use('/v1/signos', router);

app.listen(4000, ()=>{
    console.log('listening at port 4000');
})