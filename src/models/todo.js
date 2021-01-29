const todo = (sequelize, Sequelize) => {
  const todoSchema = {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    text: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    isPrivate: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },

    // dateCreated: {
    //   type: Sequelize.DATE,
    // },

    // lastUpdated: {
    //   type: Sequelize.DATE,
    // },
  };

  const Todo = sequelize.define("Todo", todoSchema);

  Todo.associate = (models) => {
    Todo.belongsTo(models.User, { foreignKey: "userId" });
  };

  return Todo;
};

module.exports = todo;
