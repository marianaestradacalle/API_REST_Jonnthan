"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importamos la bd
const database_1 = __importDefault(require("../database"));
// En este controlador se van a crear los metodos donde creamos las sentencias SQL
class ProductosController {
    // Metodo para listar
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const produ = yield database_1.default.query('SELECT * FROM tblProducto');
            res.json(produ);
            res.send('Listando los Productos');
        });
    }
    // Metodo para listar un determinado
    listarUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo } = req.params;
            const prod = yield database_1.default.query('SELECT * FROM tblProducto WHERE codigo = ?', [codigo]);
            console.log(prod);
        });
    }
    // Se crea otro metodo para crear productos
    agregar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tblProducto set ?', [req.body]);
            // Cuando Angular nos envie los datos, lo va a hacer mediante
            // este request body
            console.log(req.body);
            res.json({ message: 'Producto guardado' });
        });
    }
    // Metodo para eliminar, el + req.params.codigo es para concatenar
    // el identificador
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo } = req.params;
            yield database_1.default.query('DELETE FROM tblProducto WHERE codigo = ?', [codigo]);
            res.json({ message: 'El producto fue eliminado' });
        });
    }
    // Metodo para actualizar
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo } = req.params;
            yield database_1.default.query('UPDATE tblProducto SET ? WHERE codigo = ?', [req.body, codigo]);
            res.json({ message: 'El producto fue actualizado' });
        });
    }
}
exports.productosController = new ProductosController();
exports.default = exports.productosController;
