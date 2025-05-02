import { DataTypes } from 'sequelize';
import sequelize from '../config/mysql.js';

const Lecture = sequelize.define('Lecture', {
    id_lecture: {
    type: DataTypes.INTEGER,
    primaryKey: true
    },
    name_lecture: DataTypes.STRING,
    description: DataTypes.TEXT,
    id_lesson: DataTypes.INTEGER,
    link_material: DataTypes.STRING
}, {
    tableName: 'lectures',
    timestamps: false
});

Lecture.associate = (models) => {
    Lecture.belongsTo(models.Lesson, { foreignKey: 'id_lesson' });
};

export default Lecture;
