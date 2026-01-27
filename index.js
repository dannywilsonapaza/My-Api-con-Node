const express = require('express');
const apiRouter = require ('./server');
const app = express();
const port = 3000;

app.use(express.json()); //Middleware para parsear el body de las peticiones como JSON

//La req es la request, la petición que llega al servidor
//La res es la response, la respuesta que el servidor envía al cliente
app.get('/', (req,res)=>{
    res.send('Hola Mundo desde mi ruta raíz');
})

apiRouter(app)

app.listen(port, (req, res)=>{
    
    console.log(`Servidor escuchando en el puerto ${port}`);
});


