var Scene = require('./Scene');

var scenes = [

    new Scene(
        1,
        "上班族心事蝦郎災",
        "鱷魚先生昨晚應酬去，第二天該去上班嗎?", {
            text: "乾啦",
            display: "block"
        }, {
            text: "",
            display: "none"
        }
    ),
    new Scene(
        2,
        "早上鬧鐘響了",
        "好累阿，要不要繼續睡呢?", {
            text: "Yes",
            display: "block"
        }, {
            text: "No",
            display: "block"
        }
    ),
    new Scene(
        3,
        "早上鬧鐘響了",
        "好累阿，要不要繼續睡呢?", {
            text: "Yes",
            display: "block"
        }, {
            text: "No",
            display: "block"
        }
    ),
    new Scene(
        4,
        "早上鬧鐘響了",
        "好累阿，要不要繼續睡呢?", {
            text: "Yes",
            display: "block"
        }, {
            text: "No",
            display: "block"
        }
    )
];


module.exports = scenes;