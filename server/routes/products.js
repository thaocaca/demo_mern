const express = require("express");
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  searchProduct,
} = require("../controllers/products");
const auth = require("../middlewares/auth");
const router = express.Router();

// get product
router.get("/", auth, getProducts);

// create product
router.post("/createProduct", createProduct);

// update product
router.put("/:id", updateProduct);

// delete product
router.delete("/:id",deleteProduct);

// search product
router.get("/search/",searchProduct);

module.exports = router;
