"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Se importa el metodo donde se van a colocar las rutas
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    // Se ejecuta un constrcutor para cuando se instancia la clase
    // Ejecutara un metodo config
    constructor() {
        // Se define un enrutador y se inicializa de una vez
        this.router = express_1.Router();
        // Al ejecutar el this.config se le agrega la ruta al enrutador
        this.config();
    }
    // No va a devolver nada, va a usar la propiedad routes para poder
    // Definir una ruta
    config() {
        // Se crea una ruta inicial a traves del metodo get y así
        // Va a devolver un mensaje con el request y response
        this.router.get('/', indexController_1.indexController.index);
    }
}
// Se gurada en una constante y se exporta el enrutador
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
