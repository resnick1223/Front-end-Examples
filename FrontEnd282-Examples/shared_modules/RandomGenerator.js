function RandomGenerator() {}

RandomGenerator.prototype.nextInt = function (min, max) {
    return min + Math.floor(Math.random() * (max - min));
};

RandomGenerator.prototype.nextFloat = function (min, max) {
    return min + Math.random() * (max - min);
};

module.exports = RandomGenerator;