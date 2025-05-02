import { DataTypes } from 'sequelize';
import sequelize from '../config/mysql.js';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firebase_user_id: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'users',
  timestamps: false,
});

export default User;
