function Student(name, id) {
    this.name = name;
    this.id = id;
}

Student.prototype.sayHello = function () {
    console.log(`Hi 我是 ${this.name}`);
};