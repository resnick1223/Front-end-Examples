/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

$(function () {

    var scenes = __webpack_require__(1);
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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Scene = __webpack_require__(2);

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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

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

/***/ })
/******/ ]);