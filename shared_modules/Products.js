var Product = require('./Product');

var products = [
    new Product('iPad Pro 9.7', 19900, false),
    new Product('iPad Pro 12.9', 25900, true),
    new Product('iPad', 13900, false)
];


products.sort(function (p1, p2) {
    return p1.price - p2.price;
});

module.exports = products;