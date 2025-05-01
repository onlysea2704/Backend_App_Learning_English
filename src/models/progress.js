import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Progress = sequelize.define('Progress', {
      id_progress: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      id_student: DataTypes.INTEGER,
      id_lesson: DataTypes.INTEGER,
      status: DataTypes.STRING
    }, {
      tableName: 'Progress',
      timestamps: false
    });
  
    Progress.associate = (models) => {
      Progress.belongsTo(models.Student, { foreignKey: 'id_student' });
      Progress.belongsTo(models.Lesson, { foreignKey: 'id_lesson' });
    };
export default Progress;