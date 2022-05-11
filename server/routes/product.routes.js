// ! update below const to be "ProgramController" or "WhateverController" etc. 
// ! addListener, make sure all of the routes are updated

// ! findReplace all "Product" with "YourNewProductityName" or whatever your new thing is 
// ! THEN do similar find replace for "product" Make sure lower case

const ProductController = require("../controllers/product.controller"); 

module.exports = (app) => {
    app.get('/', ProductController.homePageDelivery); 
    app.get("/api/products", ProductController.getProducts); 
    app.get("/api/products/:id", ProductController.getProductById); 
    app.post("/api/products",ProductController.createProduct); 
    app.put("/api/products/:id", ProductController.updateProduct); 
    app.delete("/api/products/:id", ProductController.deleteProduct); 
};

