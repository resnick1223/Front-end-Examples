var Collection = require('./collection');

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