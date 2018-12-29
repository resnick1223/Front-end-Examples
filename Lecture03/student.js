function Student() {

}

Student.prototype.toObject = function () {
    return JSON.parse(JSON.stringify(this));
};