'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.User, { foreignKey: "UserId" });
    }
  }
  Profile.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'name cannot be null'
        },
        notEmpty: {
          msg: 'Please fill in name'
        }
      }
    },
    fotoProfile: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'foto profile cannot be null'
        },
        notEmpty: {
          msg: 'Please fill in foto profile'
        }
      }
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'bio cannot be null'
        },
        notEmpty: {
          msg: 'Please fill in bio'
        }
      }
    },
    gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};