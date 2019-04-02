import { Router } from 'express';
import productosController from '../controllers/productosControllers';



class ProductosRoutes {
    // Se define un enrutador y se inicializa de una vez
    public router: Router = Router();

    // Se ejecuta un constrcutor para cuando se instancia la clase
// Ejecutara un metodo config
    constructor() {
    // Al ejecutar el this.config se le agrega la ruta al enrutador
    this.config();
    }
// No va a devolver nada, va a usar la propiedad routes para poder
// Definir una ruta
    config() {
        // Se crea una ruta inicial a traves del metodo get y así
        // Va a devolver un mensaje con el request y response
        this.router.get('/', productosController.listar);
        this.router.get('/:codigo', productosController.listarUno);
        this.router.post('/', productosController.agregar);
        this.router.delete('/:codigo', productosController.eliminar )
        this.router.put('/:codigo', productosController.actualizar )
    }

}
// Se gurada en una constante y se exporta el enrutador
const productosRoutes = new ProductosRoutes();
export default productosRoutes.router;