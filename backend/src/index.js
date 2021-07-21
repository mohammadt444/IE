import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
// const express = require("express");
import { getProducts } from "../scripts/sql.js";
const port = 4000;
const app = express();

app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));

// // parse application/json
// app.use(bodyParser.json());
// app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/product", (req, res) => {
  console.log(req.body);
  console.log(req.data);
  console.log(req.params);
  getProducts().then((response) => res.json(response));
});

app.post("/product", (req, res) => {
  console.log(req.body);
  console.log(req.data);
  console.log(req.params);
  getProducts().then((response) => res.json(response));
});

app.listen(port, () => {
  console.log(`> server running on port : ${port}`);
});
