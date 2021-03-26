const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mnt_preguntas', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_encuesta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'mnt_encuesta',
        key: 'id'
      }
    },
    pregunta: {
      type: DataTypes.STRING(180),
      allowNull: false
    },
    tipo_respuesta: {
      type: DataTypes.ENUM('text','checkbox','textarea'),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mnt_preguntas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "mnt_preguntas_FK",
        using: "BTREE",
        fields: [
          { name: "id_encuesta" },
        ]
      },
    ]
  });
};
