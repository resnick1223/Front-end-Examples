var _ = require('lodash');

function Random() {
    this.nextFloat = function (min, max) {
        return min + (max - min) * Math.random();
    };

    this.nextInt = function (min, max) {
        return _.floor(this.nextFloat(min, max));
    };
}


module.exports = Random;