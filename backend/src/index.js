import express from "express";
const app = express();
const port = 4000;

app.post("/changeProduct", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`> server running on port : ${port}`);
});
