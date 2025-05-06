import { DataTypes } from 'sequelize';
import sequelize from '../config/mysql.js';

const Result = sequelize.define('Result', {
    id_result: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    id_student: DataTypes.INTEGER,
    id_quiz: DataTypes.INTEGER,
    score: DataTypes.INTEGER
}, {
    tableName: 'results',
    timestamps: false
});

Result.associate = (models) => {
    Result.belongsTo(models.Student, { foreignKey: 'id_student' });
    Result.belongsTo(models.Quiz, { foreignKey: 'id_quiz' });
};

export default Result;