import { DataTypes } from 'sequelize';
import sequelize from '../config/mysql.js';

const Response = sequelize.define('Response', {
    id_response: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    id_student: DataTypes.INTEGER,
    id_question: DataTypes.INTEGER,
    link_mp3: DataTypes.STRING,
    response: DataTypes.TEXT,
    type_response: DataTypes.STRING,
    score: DataTypes.INTEGER,
    comment: DataTypes.TEXT,
    id_result: DataTypes.INTEGER
}, {
    tableName: 'responses',
    timestamps: false
});

Response.associate = (models) => {
    Response.belongsTo(models.Student, { foreignKey: 'id_student' });
    Response.belongsTo(models.Question, { foreignKey: 'id_question' });
    Response.belongsTo(models.Result, { foreignKey: 'id_result' });
};
export default Response;