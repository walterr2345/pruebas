import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js"
import { tasks } from "./task.js";

export const project = sequelize.define("projects", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
    },
    priority: {
        type: DataTypes.INTEGER,
    },
    description: {
        type: DataTypes.STRING
    }
})

project.hasMany(tasks, {
    foreignKey: 'projectId',
    sourceKey: 'id'
})

