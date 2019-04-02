// Si sale error se instalan los modulos: @types/expres, @types/morgan,
// @types/cors, todos con -D para que esten en las dependencias
import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import productosRoutes from './routes/productosRoutes';


class Server {

    mysql = require('mysql'); 
    connection = this.mysql.createConnection({ host : 'localhost', database : 'PRODUCTOS', user : 'root', password : '', });     
   
    public app: Application;
    constructor() {

        this.app = express();
        // Se ejecutan estos metodos
        this.config();
        this.routes();
    }
// Será el encargado de configurar la propiedad app, no va a devolver nada
//  Lo que hace el process.env.PORT es que le dice a la app que si hay un
//  puerto disponible, que lo tome, y sino (||) toma el puerto 3000
    config() {
        //Esta es una variable que puede ser accedida desde app y de cualquier
        // parte de nuestro código
        this.app.set('port', process.env.PORT || 3000);

        //Se usan modulos

        //Es necesario mandarle uno dos argumentos a morgan(string),
        // Morgan es para ver las peticiones del usuario (POST, PUT, DELETE)
        this.app.use(morgan("dev"));
        // Es para que angular le pida los datos al servidor
        this.app.use(cors());
        // Esto es para que angular permite recibir y enviar datos en formato json
        this.app.use(express.json());
        //Es en caso de que queramos enviar datos en un formato HTML
        this.app.use(express.urlencoded({ extended: false }));
    }

    // Será para definir de app las rutas del servidor
    routes() {
        
        this.app.use(indexRoutes);
        // Se le agrega /api/productos para que el usuario coloque eso y
        // pueda navegar
        this.app.use('/api/productos', productosRoutes);
    }

    // Es para iniciar el servidor
    start() {
        // Para inicializar el servidor y verificarlo se hace una función
        // De flecha
    this.app.listen(this.app.get('port'), () => {
    console.log('Server en el puerto ', this.app.get('port'));
    
    });

    }

}
//Para guardar el objeto server se guarda en una constante
const server = new Server();

// Quiero ejecutar el metodo start
server.start();