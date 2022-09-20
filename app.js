import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import path from "path";

const app = express();

import homeController from "./controller/home.js";

app.set("view engine", "ejs");
app.use(express.static(path.__dirname + "public"));

app.get("/", homeController);

app.post("/", (req, res, next) => {});

app.listen(80);
