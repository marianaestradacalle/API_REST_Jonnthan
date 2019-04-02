"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Si sale error se instalan los modulos: @types/expres, @types/morgan,
// @types/cors, todos con -D para que esten en las dependencias
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const productosRoutes_1 = __importDefault(require("./routes/productosRoutes"));
class Server {
    constructor() {
        this.mysql = require('mysql');
        this.connection = this.mysql.createConnection({ host: 'localhost', database: 'PRODUCTOS', user: 'root', password: '', });
        this.app = express_1.default();
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
        this.app.use(morgan_1.default("dev"));
        // Es para que angular le pida los datos al servidor
        this.app.use(cors_1.default());
        // Esto es para que angular permite recibir y enviar datos en formato json
        this.app.use(express_1.default.json());
        //Es en caso de que queramos enviar datos en un formato HTML
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    // Será para definir de app las rutas del servidor
    routes() {
        this.app.use(indexRoutes_1.default);
        // Se le agrega /api/productos para que el usuario coloque eso y
        // pueda navegar
        this.app.use('/api/productos', productosRoutes_1.default);
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
