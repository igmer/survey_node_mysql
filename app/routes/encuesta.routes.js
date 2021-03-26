module.exports = app => {
    const encuesta = require("../controllers/encuesta.controller");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", encuesta.create);
    app.use('/api/encuesta', router);
};
