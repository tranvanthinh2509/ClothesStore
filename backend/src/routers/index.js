const UserRouter = require("./UserRouter");
const InsertRouter = require("./InsertRouter");
const ProductRouter = require("./ProductRouter");

const initRouters = (app) => {
  app.use("/api/user", UserRouter);
  app.use("/api/insert", InsertRouter);
  app.use("/api/product", ProductRouter);
  return app.use("/", (req, res) => {
    res.send("server on 123");
  });
};

module.exports = initRouters;
