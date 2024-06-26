import { Sequelize } from "sequelize";

// Configuración directa de la base de datos (no recomendado para producción)
const db = new Sequelize(
    'perreradb',  // Nombre de la base de datos
    'root',       // Usuario de la base de datos
    'zqFkWVWvHmxEHdbemuzEfKCANDPAWCEn', // Contraseña del usuario de la base de datos
    {
        host: 'monorail.proxy.rlwy.net', // Host de la base de datos
        dialect: 'mysql',
        dialectModule: require('mysql2'),
        logging: false, // Puedes habilitar el logging si lo necesitas
    }
);

export default db;
