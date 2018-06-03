var products = require('../shared_modules/Products');
var RandomGenerator = require('../shared_modules/RandomGenerator');
var $ = require('jquery');

var random = new RandomGenerator();

$(function () {
    var $shoppingCart = $('#shoppingCart');
    for (var count = 1; count <= 5; count++) {
        var product = products[random.nextInt(0, products.length)];
        if (product.soldOut) continue;
        var $li = $('<li></li>');
        $li.text(product.name);
        $li.appendTo($shoppingCart);
    }
});