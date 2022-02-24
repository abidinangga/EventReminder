'use strict';
const bcrypt = require('bcryptjs');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Profile, { foreignKey: "UserId"})

      User.hasMany(models.Post,{foreignKey:"UserId"})
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Name cannot be null'
        },
        notEmpty: {
          msg: 'Please fill in Name'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email is already been registered'
      },
      validate: {
        notNull: {
          msg: 'Email is Required'
        },
        isEmail: {
          msg: 'Please enter the correct email'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Password is Required'
        },
        len: {
          args: [8, 16],
          msg: 'Password must be between 8 - 16 characters'
        }
      }
    },
    gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate(user => {
    const { password } = user
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    user.password = hash
    user.role = 'User'
  })
    

  return User;
};