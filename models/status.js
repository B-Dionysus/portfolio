const { INTEGER } = require("sequelize");

module.exports = function(sequelize, DataTypes) {
    const Status = sequelize.define("Status", {
        type: DataTypes.STRING,
    });

    Status.associate = function(models) {
      Status.hasMany(models.Category, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    Status.associate = function(models) {
        Status.hasMany(models.Project, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return Status;
};
