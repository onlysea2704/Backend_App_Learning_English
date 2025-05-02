import { DataTypes } from 'sequelize';
import sequelize from '../config/mysql.js';

const Lesson = sequelize.define('Lesson', {
    id_lesson: {
    type: DataTypes.INTEGER,
    primaryKey: true
    },
    id_course: DataTypes.INTEGER,
    order_lesson: DataTypes.INTEGER,
    type_lesson: DataTypes.STRING
}, {
    tableName: 'lessons',
    timestamps: false
});

Lesson.associate = (models) => {
    Lesson.belongsTo(models.Course, { foreignKey: 'id_course' });
};

export default Lesson;