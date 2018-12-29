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
    var Storage = __webpack_require__(1);
    var db = new Storage("localStorage");
    var notes = db.addCollection("notes");
    render();


    function deleteArticle(evt) {
        var id = evt.target.id;
        notes.delete(id);
        render();
    }


    function render() {
        var $notes = $('#notes');
        $notes.html("");
        notes.data.forEach(function (note) {

            var $note = $('<article></article>');
            $note.attr('id', note.id);
            var $h3 = $('<h3></h3>');
            $h3.text(note.title).appendTo($note);
            var $p = $('<p></p>');
            $p.text(note.text).appendTo($note);

            $note.appendTo($notes);
            $note.click(deleteArticle);
        });
    }



    $("#save-btn").click(function () {
        var note = {
            title: $("#note-title").val(),
            text: $("#note-text").val()
        };
        notes.insert(note);
        render();
    });

});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Collection = __webpack_require__(2);

function Storage(type) {
    switch (type) {
        case "localStorage":
            this.storage = localStorage;
            break;
        case "sessionStorage":
            this.storage = sessionStorage;
            break;
        default:
            this.storage = sessionStorage;
            break;
    }
}


Storage.prototype.getItem = function (key) {
    var item = this.storage.getItem(key);
    if (!item)
        return null;
    else
        return JSON.parse(item);
};

Storage.prototype.setItem = function (key, value) {
    this.storage.setItem(key, JSON.stringify(value));
};

Storage.prototype.removeItem = function (key) {
    this.storage.removeItem(key);
};


Storage.prototype.addCollection = function (name) {
    var collectionInfo = this.getItem(name + "Info");
    if (collectionInfo === null) {
        collectionInfo = {
            name: name,
            keys: [],
            maxId: 0
        };
        this.setItem(name + "Info", collectionInfo);
    }

    var data = [];
    var self = this;
    collectionInfo.keys.forEach(function (key) {
        var item = self.getItem(key);
        data.push(item);
    });

    return new Collection(collectionInfo, data, self);

};

module.exports = Storage;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function Collection(collectionInfo, data, storage) {
    this.data = data;
    this.collectionInfo = collectionInfo;
    this.storage = storage;

}

Collection.prototype.insert = function (item) {
    item.id = this.collectionInfo.name + (++this.collectionInfo.maxId);
    this.data.push(item);
    this.collectionInfo.keys.push(item.id);
    this.storage.setItem(item.id, item);
    this.storage.setItem(this.collectionInfo.name + "Info", this.collectionInfo);
};

Collection.prototype.delete = function (arg) {
    var id = null;
    if (typeof arg === 'object')
        id = arg.id;
    else if (typeof arg === 'number') {
        id = arg;
        id = this.collectionInfo.name + id;
    } else if (typeof arg === 'string')
        id = arg;
    else
        id = -1;

    for (var index = 0; index < this.data.length; index++) {
        if (this.data[index].id === id) {
            this.data.splice(index, 1);
            this.storage.removeItem(id);
            this.collectionInfo.keys.splice(index, 1);
            break;
        }

    }

    this.storage.setItem(this.collectionInfo.name + "Info", this.collectionInfo);
};


Collection.prototype.update = function (item) {
    for (var index = 0; index < this.data.length; index++) {
        if (this.data[index].id === item.id) {
            this.data[index] = item;
            this.storage.setItem(item.id, item);
            break;
        }
    }
};

Collection.prototype.get = function (key) {
    var id = this.collectionInfo.name + key;
    return this.storage.getItem(id);
};

module.exports = Collection;

/***/ })
/******/ ]);