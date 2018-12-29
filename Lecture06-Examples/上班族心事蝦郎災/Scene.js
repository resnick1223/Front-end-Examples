function Scene(id, title, description, yesBtn, noBtn) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.yesBtn = yesBtn;
    this.noBtn = noBtn;
}

Scene.prototype.render = function () {
    $("#scene-title").text(this.title);
    $("#scene-description").text(this.description);
    $("#scene-img").attr("src", "./images/" + this.id + ".jpg");
    $("#yes-btn").text(this.yesBtn.text);
    $("#yes-btn").css("display", this.yesBtn.display);
    $("#no-btn").text(this.noBtn.text);
    $("#no-btn").css("display", this.noBtn.display);
};

module.exports = Scene;