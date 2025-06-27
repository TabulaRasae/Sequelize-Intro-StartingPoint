const { DataTypes } = require("sequelize");
const db = require("./db");

// TASK 1: Define the Task model here
const Task = db.define("task", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },

  // title: "Get eight hours of sleep",
  // description: "Sleepy time tea is a must",
  // completed: false,
  // userId: users[0].id,

  // You should define the following columns:
  // - title: string, required
  // - description: string, required
  // - completed: boolean, default false
});

module.exports = Task;
