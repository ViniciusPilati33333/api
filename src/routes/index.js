const { Router } = require("express");
const { route } = require("./users.routes");

const usersRouter = require("./users.routes")


const routes = Router;

routes.use("./users", usersRouter);

module.exports = routes;