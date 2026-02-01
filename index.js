const express = require('express');
const {errorLogs, handlerError} = require ('./middleware/error.handler');
const cors = require('cors');
const apiRouter = require ('./server');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); //Middleware para parsear el body de las peticiones como JSON

//La req es la request, la petición que llega al servidor
//La res es la response, la respuesta que el servidor envía al cliente
app.get('/', (req,res)=>{
    res.send('Hola Mundo');
})

apiRouter(app)

app.use(handlerError);
app.use(errorLogs);


app.listen(port, (req, res)=>{
    
    console.log(`Servidor escuchando en el puerto ${port}`);
});


