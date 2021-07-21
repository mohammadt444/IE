import express from "express";
import cors from "cors";
// const express = require("express");
import { getProducts } from "../scripts/sql.js";
const port = 4000;
const app = express();

app.use(cors());

app.set("view engine", "pug");
app.use("/static", express.static("public"));

app.get("/product", (req, res) => {
  getProducts().then((response) => res.json(response));
});

app.listen(port, () => {
  console.log(`> server running on port : ${port}`);
});
