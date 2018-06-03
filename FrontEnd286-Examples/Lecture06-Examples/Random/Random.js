function Random() {

}

Random.prototype.nextFloat = function (min, max) {
    return Math.random() * (max - min) + min;
};

Random.prototype.next = function (min, max) {
    return Math.floor(this.nextFloat(min, max));
};

module.exports = Random;