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