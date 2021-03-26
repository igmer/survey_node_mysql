module.exports = {
    HOST: "localhost",
    USER: "igmer",
    PASSWORD: "feedot7m",
    DB: "encuestas",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
