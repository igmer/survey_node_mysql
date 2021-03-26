const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mnt_encuesta', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    titulo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    activa: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    fecha_hora_inicio: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fecha_hora_reg: {
      type: DataTypes.DATE,
      allowNull: false
    },
    id_usuario_reg: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fecha_hora_mod: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id_usuario_mod: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    inidicaciones: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mnt_encuesta',
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
    ]
  });
};
