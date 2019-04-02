import { Request, Response } from 'express';

// Importamos la bd
import pool from '../database';

// En este controlador se van a crear los metodos donde creamos las sentencias SQL

class ProductosController {

    // Metodo para listar
   public async listar(req:Request , res: Response ) {
     const produ = await  pool.query('SELECT * FROM tblProducto');
     res.json(produ);
       res.send('Listando los Productos')
    }
    // Metodo para listar un determinado
    public async listarUno ( req:Request , res: Response ): Promise<void>{
       const { codigo } = req.params;
       const prod = await pool.query('SELECT * FROM tblProducto WHERE codigo = ?', [codigo])
       console.log( prod );
       
    }

    // Se crea otro metodo para crear productos
    public async agregar (req:Request , res: Response): Promise<void> {

        await pool.query('INSERT INTO tblProducto set ?', [req.body]);
        // Cuando Angular nos envie los datos, lo va a hacer mediante
        // este request body
        console.log(req.body);
        
        res.json({ message: 'Producto guardado'});
    }
    // Metodo para eliminar, el + req.params.codigo es para concatenar
    // el identificador
    public async eliminar ( req:Request , res: Response ): Promise<void>{
        const { codigo } = req.params;
        await pool.query('DELETE FROM tblProducto WHERE codigo = ?', [codigo]);
        res.json({message: 'El producto fue eliminado'});
    }
    // Metodo para actualizar
    public async actualizar ( req:Request , res: Response ): Promise<void>{
        const { codigo } = req.params;
        await pool.query('UPDATE tblProducto SET ? WHERE codigo = ?', [req.body, codigo]);
        res.json({message: 'El producto fue actualizado'});
    }
}

export const productosController = new ProductosController();

export default productosController;