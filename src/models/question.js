import { DataTypes } from 'sequelize';
import sequelize from '../config/mysql.js';

const Question = sequelize.define('Question', {
    id_question: {
    type: DataTypes.INTEGER,
    primaryKey: true
    },
    question: DataTypes.TEXT,
    id_quiz: DataTypes.INTEGER,
    link_mp3: DataTypes.STRING,
    link_image: DataTypes.STRING,
    option_1: DataTypes.STRING,
    option_2: DataTypes.STRING,
    option_3: DataTypes.STRING,
    option_4: DataTypes.STRING,
    answer: DataTypes.STRING,
    scale: DataTypes.INTEGER,
    interpret: DataTypes.TEXT,
    type_question: DataTypes.STRING
}, {
    tableName: 'Question',
    timestamps: false
});

Question.associate = (models) => {
    Question.belongsTo(models.Quiz, { foreignKey: 'id_quiz' });
};

export default Question;
