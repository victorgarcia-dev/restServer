const express = require('express');
const cors = require('cors');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //rutas api
        this.usersPath = '/api/usuarios';

        //middlewares == son funciones añaden otra funcionalidad
        this.middleware();
        
        //rutas app
        this.routes();
    }

    routes() {
        //ruta usuarios
        this.app.use(this.usersPath, require('../routes/usuarios'));
    }

    listen() {
        //inicio del servidor
        this.app.listen(this.port, () => {
            console.log(`servidor corriendo en el puerto ${this.port}`);
        })
    }

    middleware(){
          //cors
          this.app.use(cors());

          //directorio publico
          this.app.use(express.static('public')); 
          
          //parseo y lectura del body =>para leer la informacion por post
          this.app.use(express.json());
    }
}


module.exports = Server;