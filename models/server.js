
const express = require('express')
var cors = require('cors')


class Server{

    constructor( ) {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middleweares
        this.middlewares();

        //Rutas de aplicación
        this.routs();
    }

    middlewares(){


        //CORS
        this.app.use(cors());

        //Parseo y Lectura del body
        this.app.use(express.json());


        //Directorio público
        this.app.use(express.static('public'));


    }

    routs(){
        
        this.app.use( this.usuariosPath ,require('../routes/usuarios'));
    }

    listen(){
       this. app.listen(this.port , () => {
            console.log('Servidor corriendo en el puerto ', this.port);
        });
    }


}

module.exports = Server;

