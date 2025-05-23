import { DataTypes } from 'sequelize';
import sequelize from '../config/mysql.js';

const Quiz = sequelize.define('Quiz', {
    id_quiz: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    autoIncrement: true
    },
    name_quiz: DataTypes.STRING,
    description: DataTypes.TEXT,
    id_lesson: DataTypes.INTEGER,
    score: DataTypes.INTEGER
}, {
    tableName: 'quizzes',
    timestamps: false
});

// Quiz.associate = (models) => {
//     Quiz.belongsTo(models.Lesson, { foreignKey: 'id_lesson' });
// };
  
export default Quiz;