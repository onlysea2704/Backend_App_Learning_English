import { DataTypes } from 'sequelize';
import sequelize from '../config/mysql.js';

const User = sequelize.define('User', {
  firebase_user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  role: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'users',
  timestamps: false,
});

export default User;
