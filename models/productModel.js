let products = require("../data/products");
const { v4: uuidv4 } = require("uuid");
const { writeDataToFile } = require("../utils");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.p_id == id);
    resolve(product);
  });
}

function create(product) {
  return new Promise((resolve, reject) => {
    const newProduct = { p_id: uuidv4(), ...product };
    products.push(newProduct);
    writeDataToFile("./data/products.json", products);
    resolve(newProduct);
  });
}

function update(id, product) {
  return new Promise((resolve, reject) => {
    const index = products.findIndex((p) => { return p.p_id == id});
    console.log(index)
    products[index] = { p_id: Number(id), ...product };
    writeDataToFile("./data/products.json", products);
    resolve(products[index]);
  });
}

function remove(id) {
    return new Promise((resolve, reject) => {
      products=products.filter((p) => p.p_id!=id)
      writeDataToFile("./data/products.json", products);
      resolve();
    });
  }

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
};
