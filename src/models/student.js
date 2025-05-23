import { DataTypes } from 'sequelize';
import sequelize from '../config/mysql.js';

const Student = sequelize.define('Student', {
    id_student: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    link_image: DataTypes.STRING,
    id_user: DataTypes.INTEGER
}, {
    tableName: 'students',
    timestamps: false
});

// Student.associate = (models) => {
//     Student.belongsTo(models.User, { foreignKey: 'id_user' });
// };

export default Student;