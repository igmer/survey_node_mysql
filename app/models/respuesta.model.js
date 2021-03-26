const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mnt_respuestas', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_pregunta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'mnt_preguntas',
        key: 'id'
      }
    },
    respuesta: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    fecha_hora_reg: {
      type: DataTypes.DATE,
      allowNull: false
    },
    latitud: {
      type: DataTypes.DECIMAL(8,3),
      allowNull: true
    },
    longitud: {
      type: DataTypes.DECIMAL(8,3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mnt_respuestas',
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
        name: "mnt_respuestas_FK",
        using: "BTREE",
        fields: [
          { name: "id_pregunta" },
        ]
      },
    ]
  });
};
