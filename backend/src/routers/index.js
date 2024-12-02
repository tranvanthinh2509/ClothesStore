const UserRouter = require("./UserRouter");

const initRouters = (app) => {
  app.use("/api/user", UserRouter);

  return app.use("/", (req, res) => {
    res.send("server on 123");
  });
};

module.exports = initRouters;
