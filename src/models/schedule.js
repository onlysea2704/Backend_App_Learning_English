import { DataTypes } from 'sequelize';
import sequelize from '../config/mysql.js';

const Schedule = sequelize.define('Schedule', {
    id_schedule: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_schedule_qstash: DataTypes.STRING,
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    time_sent: DataTypes.DATE,
}, {
    tableName: 'schedules',
    timestamps: false
});

export default Schedule;