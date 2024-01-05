const Express = require("express");

const { auth } = require("express-oauth2-jwt-bearer");
const errorHandler = require("./Middleworks/errorHandler");
// Configuracion Middleware con el Servidor de Autorización
const autenticacion = auth({
  audience: "http://localhost:3000/api/productos",
  issuerBaseURL: "https://dev-utn-frc-iaew.auth0.com/",
  tokenSigningAlg: "RS256",
});
const App = Express();
App.use(Express.json());

const RouterLibros = require("./Routes/libros");
//Configuramos el middleware de autenticacion
App.use("/libros", autenticacion, RouterLibros);

const port = 3000;

App.get("/", (req, res) => {
  res.status(200).json({ message: "API Biblioteca de Barrionuevo Natanael" });
});

App.use(errorHandler);

App.listen(port, () => {
  console.log(`El servidor esta corriendo en el puerto ${port}`);
});
