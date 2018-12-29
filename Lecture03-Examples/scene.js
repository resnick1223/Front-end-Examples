function Scene(id, title) {
    this.id = id;
    this.title = title;
    this.getImage = function () {
        return './images/' + (this.id + 1) + '.jpg';
    };
}

module.exports = Scene;