var $ = require('jquery');
var elsa = {
    name: "Elsa",
    pos: {
        x: 0,
        y: 0
    },
    angle: 0,
    moveForward: function (d) {
        this.pos.x = this.pos.x + d * Math.cos(this.angle * Math.PI / 180.0);
        this.pos.y = this.pos.y + d * Math.sin(this.angle * Math.PI / 180.0);
    },

    turnRight: function (theta) {
        this.angle = this.angle + theta;
    },

    showPosition: function () {
        console.log(
            this.name +
            "的位置在(" +
            this.pos.x +
            ", " +
            this.pos.y +
            ")");
    }
};

$("#move-btn").click(function () {
    var d = parseInt($("#distance").val());
    elsa.angle = parseInt($("#angle").val())
    elsa.moveForward(d);
    $("#elsa").css("left", elsa.pos.x);
    $("#elsa").css("top", elsa.pos.y);
});