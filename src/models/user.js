const user = (sequelize, Sequelize) => {
  const userSchema = {
    username: {
      type: Sequelize.STRING,
      primaryKey: true,
    },

    passwordHash: {
      type: Sequelize.STRING,
    },

    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  };

  const User = sequelize.define("User", userSchema);

  User.associate = (models) => {
    User.hasMany(models.Todo, { foreignKey: "userId", onDelete: "CASCADE" });
  };

  User.prototype.toJSON = function () {
    var values = Object.assign({}, this.get());

    delete values.passwordHash;
    return values;
  };

  return User;
};

module.exports = user;
