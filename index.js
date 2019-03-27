const express = require("express");

const app = express();

app.listen(3200);

const logMiddleWare = (req, res, next) => {
  console.log(`HOST: ${req.headers.host} | URL: ${req.url}
  | METHOD: ${req.method}`);

  req.appName = "Aplicação Node01";
  return next();
};

app.use(logMiddleWare);

app.get("/", (req, res) => {
  return res.send(`Bem vindo, ${req.appName}, ${req.query.name}`);
});
