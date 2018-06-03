$(function () {

    var scenes = require('./scenes');
    var currentId = 1;
    var scene = scenes[currentId - 1];
    console.log(scene);
    scene.render();

    function makeDecision(decision) {
        if (currentId === 1) {
            currentId = 2;
        } else if (currentId === 2) {
            currentId = decision === 1 ? 3 : 4;
        } else {
            currentId = 1;
        }
        scene = scenes[currentId - 1];
        scene.render();
    }

    $("#yes-btn").click(function () {
        makeDecision(1);
    });
    $("#no-btn").click(function () {
        makeDecision(2);
    });
});