import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    'proyectsdb',
    'postgres',
    'root', {
    host: 'localhost',
    dialect: 'postgres'
})