import { DataTypes } from 'sequelize';
import sequelize from '../config/mysql.js';

const MyCourse = sequelize.define('MyCourse', {
    id_transaction: {
    type: DataTypes.INTEGER,
    primaryKey: true
    },
    id_student: DataTypes.INTEGER,
    id_course: DataTypes.INTEGER,
    time_transaction: DataTypes.DATE
}, {
    tableName: 'MyCourse',
    timestamps: false
});

MyCourse.associate = (models) => {
    MyCourse.belongsTo(models.Student, { foreignKey: 'id_student' });
    MyCourse.belongsTo(models.Course, { foreignKey: 'id_course' });
};

export default MyCourse;