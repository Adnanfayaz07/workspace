const fs = require('fs');
const path = require('path');
const Cart = require('./cart')
const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);
const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {

    getProductsFromFile(products => {
      if (this.id) {
        const existingproductindex = products.findIndex(prod => prod.id === this.id);
        const updatedproducts = [...products]
        updatedproducts[existingproductindex] = this;
        fs.writeFile(p, JSON.stringify(updatedproducts), err => {
          console.log(err);
        });
      }
      else {
        this.id = Math.random().toString()
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), err => {
          console.log(err);
        });
      }
    });
  }
  static deletebyid(id) {
    getProductsFromFile(products => {
      const product = products.find(prod => prod.id === id)
      if(!product){
        return
    }
      const updatedproducts = products.filter(prod => prod.id !== id);
      fs.writeFile(p, JSON.stringify(updatedproducts), err => {
        if (!err) {
          Cart.deleteproduct(id, product.price)
        }
      })
    })
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
  static findbyid(id, cb) {
    getProductsFromFile(products => {
      const product = products.find(p => p.id == id)
      cb(product)
    })
  }
};
