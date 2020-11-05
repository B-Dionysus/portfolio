const { INTEGER } = require("sequelize");

module.exports = function(sequelize, DataTypes) {
    const Project = sequelize.define("Project", {
        title: DataTypes.STRING,
        displayName: DataTypes.STRING,
        about: DataTypes.STRING(1024),
        externalLink:DataTypes.STRING,
        thumbnail: DataTypes.STRING,
        github:DataTypes.STRING,
        displayOrder:INTEGER,
    });
    Project.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Project.belongsTo(models.Category, {
        foreignKey: {
                allowNull: false
            }
        });
    };
    Project.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Project.belongsTo(models.Status, {
        foreignKey: {
        allowNull: false
        }
    });
    };
    return Project;
};
