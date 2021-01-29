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

    // registrationDate: {
    //   type: Sequelize.DATE,
    // },
  };

  //   const userScope = {
  //     scopeWithoutPassword: () => ({
  //       attributes: { exclude: ["passwordHash"] },
  //     }),
  //   };

  const User = sequelize.define("User", userSchema);

  User.associate = (models) => {
    User.hasMany(models.Todo, { foreignKey: "userId", onDelete: "CASCADE" });
  };

  //   User.findByLogin = async (login) => {
  //     const user = await User.findOne({
  //       where: { username: login },
  //     });

  //     return user;
  //   };

  User.prototype.toJSON = function () {
    var values = Object.assign({}, this.get());

    delete values.passwordHash;
    return values;
  };

  return User;
};

module.exports = user;
