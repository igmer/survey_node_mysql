var DataTypes = require("sequelize").DataTypes;
var _mnt_encuesta = require("./encuesta.model.");
var _mnt_preguntas = require("./pregunta.model.");
var _mnt_respuestas = require("./respuesta.model");

function initModels(sequelize) {
  var mnt_encuesta = _mnt_encuesta(sequelize, DataTypes);
  var mnt_preguntas = _mnt_preguntas(sequelize, DataTypes);
  var mnt_respuestas = _mnt_respuestas(sequelize, DataTypes);

  mnt_preguntas.belongsTo(mnt_encuesta, { as: "id_encuesta_mnt_encuestum", foreignKey: "id_encuesta"});
  mnt_encuesta.hasMany(mnt_preguntas, { as: "mnt_pregunta", foreignKey: "id_encuesta"});
  mnt_respuestas.belongsTo(mnt_preguntas, { as: "id_pregunta_mnt_pregunta", foreignKey: "id_pregunta"});
  mnt_preguntas.hasMany(mnt_respuestas, { as: "mnt_respuesta", foreignKey: "id_pregunta"});

  return {
    mnt_encuesta,
    mnt_preguntas,
    mnt_respuestas,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
