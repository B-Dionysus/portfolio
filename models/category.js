const { INTEGER } = require("sequelize/types");

module.exports = function(sequelize, DataTypes) {
    const Category = sequelize.define("Category", {
        title: DataTypes.STRING,
        about: DataTypes.STRING,
        tabName: DataTypes.STRING,
        thumbnail: DataTypes.STRING,
        addedBy:INTEGER,
        displayOrder:INTEGER,
        status:INTEGER
    });

    return Burger;
};
