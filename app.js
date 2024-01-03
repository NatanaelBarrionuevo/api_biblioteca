const Express = require('express');
const App = Express();
const errorHandler = require('./Middleworks/errorHandler');
const RouterLibros = require('./Routes/libros');
const port = 3000; 

App.use(Express.json());
App.use(errorHandler);
App.use('/libros', RouterLibros);

App.listen(port, ()=>{
    console.log(`El servidor esta corriendo en el puerto ${port}`);
})