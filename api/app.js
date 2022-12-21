const express = require("express");
const router = require("./src/router");
const path = require("path");

const pathToIndex = path.resolve(__dirname, "../client/index.html");
const app = express();
app.use("/", router);
app.use(express.static(path.resolve(__dirname, "uploads")));
app.use("/*", (request, response) => {
    response.sendFile(pathToIndex);
});

module.exports = app;
