import { DataTypes } from 'sequelize';
import sequelize from '../config/mysql.js';

const Lecturer = sequelize.define('Lecturer', {
  id_lecturer: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: DataTypes.STRING,
  experience: DataTypes.STRING,
  link_image: DataTypes.STRING,
  email: DataTypes.STRING,
  description: DataTypes.INTEGER
}, {
  tableName: 'lecturers',
  timestamps: false
});

export default Lecturer;