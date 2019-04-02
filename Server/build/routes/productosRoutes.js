"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productosControllers_1 = __importDefault(require("../controllers/productosControllers"));
class ProductosRoutes {
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
        this.router.get('/', productosControllers_1.default.listar);
        this.router.get('/:codigo', productosControllers_1.default.listarUno);
        this.router.post('/', productosControllers_1.default.agregar);
        this.router.delete('/:codigo', productosControllers_1.default.eliminar);
        this.router.put('/:codigo', productosControllers_1.default.actualizar);
    }
}
// Se gurada en una constante y se exporta el enrutador
const productosRoutes = new ProductosRoutes();
exports.default = productosRoutes.router;
