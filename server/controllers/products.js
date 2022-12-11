const express = require("express");
const productsModel = require("../models/products");
const getProducts = async (req, res) => {
  try {
    const products = await productsModel.find();
    console.log("products", products);
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await productsModel.create({
      createDate: createDate,
      productCode: productCode,
      name: name,
      type: type,
      cost: cost,
      amount: amount,
      status: status,
    });
    res.status(200).json(product);
    res.json("create success");
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

 const updateProduct = async (req, res) => {
  try {
    const updateProduct = req.body;
    const product = await productsModel.findByIdAndUpdate(
      { _id: updateProduct._id },
      updateProduct,
      { new: true }
    );
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

 const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    productsModel.deleteOne({
      _id: id,
    });
    res.status(200).json("delete success");
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

 const searchProduct = async (req, res) => {
  try {
    const searchField = req.query.name;
    const productSearch = await productsModel.find({
      name: { $regex: searchField, $options: "$i" },
    });
    res.send(productSearch);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};


module.exports = {getProducts, createProduct, updateProduct, deleteProduct, searchProduct}