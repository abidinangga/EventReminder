'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User, { foreignKey: "UserId" });
    }
  }
  Post.init({
    title:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'title cannot be null'
        },
        notEmpty: {
          msg: 'Please fill in title'
        }
      }
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'content cannot be null'
        },
        notEmpty: {
          msg: 'Please fill in content'
        }
      }
    },
    imageUrl:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'title cannot be imageUrl'
        },
        notEmpty: {
          msg: 'Please fill in imageUrl'
        }
      }
    },
    like: DataTypes.INTEGER,
    reminder: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'reminder cannot be null'
        },
        notEmpty: {
          msg: 'Please fill in reminder'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};