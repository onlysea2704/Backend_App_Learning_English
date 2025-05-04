
import { DataTypes } from 'sequelize';
import sequelize from '../config/mysql.js';

const Comment = sequelize.define('Comment', {
    id_comment: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    id_student: DataTypes.INTEGER,
    id_course: DataTypes.INTEGER,
    comment: DataTypes.TEXT,
    time_comment: DataTypes.DATE
}, {
    tableName: 'Comment',
    timestamps: false
});

Comment.associate = (models) => {
    Comment.belongsTo(models.Student, { foreignKey: 'id_student' });
    Comment.belongsTo(models.Course, { foreignKey: 'id_course' });
};
  
export default Comment;