const { INTEGER } = require("sequelize");

module.exports = function(sequelize, DataTypes) {
    const Category = sequelize.define("Category", {
        title: DataTypes.STRING,
        about: DataTypes.STRING(1024),
        tabName: DataTypes.STRING,
        thumbnail: DataTypes.STRING,
        addedBy:INTEGER,
        displayOrder:INTEGER,
        status:INTEGER
    });

    Category.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Category.hasMany(models.Project, {
        });
      };
    return Category;
};
