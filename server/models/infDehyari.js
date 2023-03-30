const { DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const InfDehyari = sequelize.define("Information-dy", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING(50), allowNull: false },
  admin: { type: DataTypes.STRING(50), allowNull: false },
  account: { type: DataTypes.BIGINT, allowNull: false },
});

module.exports = InfDehyari;
