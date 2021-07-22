import express from "express";
import cors from "cors";
import { getProducts, getCategories } from "../scripts/sql.js";
const port = 4000;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/product", (req, res) => {
  const { sort, selected_categories, searchString } = req.body;
  getProducts(sort).then((response) => {
    if (selected_categories && selected_categories.length != 0) {
      response = response.filter(({ category }) =>
        selected_categories.includes(category)
      );
    }
    if (searchString) {
      response = response.filter(({ name }) => name.includes(searchString));
    }
    res.json(response);
  });
});

app.get("/category", (req, res) => {
  getCategories().then((response) => res.json(response));
});

app.listen(port, () => {
  console.log(`> server running on port : ${port}`);
});
