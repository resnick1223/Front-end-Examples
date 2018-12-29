var Scene = require('./Scene');

var scenes = [

    new Scene(
        1,
        "你喜歡偏硬的麵包還是偏軟的呢",
        "請選擇", {
            text: "偏硬的",
            display: "block"
        }, {
            text: "偏軟的",
            display: "none"
        }
    ),
    new Scene(
        2,
        "甜麵包跟鹹麵包在你面前你會先吃哪一個呢",
        "請選擇", {
            text: "甜麵包",
            display: "block"
        }, {
            text: "鹹麵包",
            display: "block"
        }
    ),
    new Scene(
        3,
        "紅豆麵包跟熱狗麵包在你面前你會先吃那一種呢",
        "請選擇", {
            text: "紅豆麵包",
            display: "block"
        }, {
            text: "熱狗麵包",
            display: "block"
        }
    ),
    new Scene(
        4,
        "大蒜法國麵包讚喔",
        "大蒜法國麵包讚喔", {
            text: "",
            display: ""
        }, {
            text: "",
            display: ""
        }
    ),
        new Scene(
        5,
        "青蔥麵包讚喔",
        "青蔥麵包讚喔", {
            text: "",
            display: ""
        }, {
            text: "",
            display: ""
        }
    ),
        new Scene(
        6,
        "巧克力貝果讚喔",
        "巧克力貝果讚喔", {
            text: "",
            display: ""
        }, {
            text: "",
            display: ""
        }
    ),
         new Scene(
        7,
        "波蘿麵包讚喔",
        "波蘿麵包讚喔", {
            text: "",
            display: ""
        }, {
            text: "",
            display: ""
        }
    )
];


module.exports = scenes;