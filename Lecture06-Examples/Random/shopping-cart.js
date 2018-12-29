var Random = require('./Random');
var random = new Random();
var products = [{
        name: "iPhone 7",
        price: 28900
    },
    {
        name: "Apple Watch II",
        price: 10000
    }
];

var shoppingCart = [];

for (var count = 1; count <= 5; count++) {
    var index = random.next(0, products.length);
    var product = products[index];
    shoppingCart.push(product);
}

var total = 0;
shoppingCart.forEach(function (product) {
    console.log(product);
    total += product.price;
});

console.log(total);