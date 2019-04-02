import mysql from 'promise-mysql';
import keys from './keys'


// Esto ejecuta el modulo de la base de datos
const pool = mysql.createPool(keys.database);

// A traves de get conecction vamos a poder enviarle consultas y mas
pool.getConnection()        
        .then(connection =>{
        pool.releaseConnection(connection);
        console.log('DB is connected');
        
});

export default pool;