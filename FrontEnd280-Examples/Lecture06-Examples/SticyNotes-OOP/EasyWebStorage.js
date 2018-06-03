/**
 * @constructor
 * @param {string} namespace - 應用程式命名空間
 * @param {string} storageType - WebStorage 型態
 */
function EasyWebStorage(namespace, storageType) {
    this.namespace = namespace;
    this.storageType = storageType;
    this.keysName = this.namespace + "-keys";
    this.init();
}

/**
 * 根據 storageType 初始化
 */
EasyWebStorage.prototype.init = function () {
    switch (this.storageType) {
        case "localStorage":
            this.storage = localStorage;
            break;
        case "sessionStorage":
            this.storage = sessionStorage;
            break;
        default:
            this.storage = localStorage;
            break;
    }
    this.keys = this.storage[this.keysName];
    if (!this.keys) {
        this.keys = [];
        this.storage[this.keysName] = JSON.stringify(this.keys);
    } else {
        this.keys = JSON.parse(this.keys);
    }
};

/**
 * 根據 key 選取 storage 中的資料
 * @param {string} key - storage 的鍵值
 */
EasyWebStorage.prototype.select = function (key) {
    return JSON.parse(this.storage[key]);
};

/**
 * 透過 update 更新所有鍵值
 */
EasyWebStorage.prototype.updateKeys = function () {
    this.update(this.keysName, this.keys);
};


/**
 * 以物件來新增資料到storage
 * @param {object} data 
 */
EasyWebStorage.prototype.insert = function (data) {
    var key = this.namespace + "_" + (new Date()).getTime();
    this.keys.push(key);
    this.updateKeys();
    data._id = key;
    this.storage.setItem(key, JSON.stringify(data));
    return data;
};

/**
 * 給定key，用新的data更新資料
 * @param {string} key
 * @param {object} data
 */
EasyWebStorage.prototype.update = function (key, data) {
    this.storage.setItem(key, JSON.stringify(data));
};

/**
 * 刪除給定的key的資料
 * @param {string} key
 */
EasyWebStorage.prototype.delete = function (key) {
    if (this.keys) {
        for (var index = 0; index < this.keys.length; index++) {
            if (key === this.keys[index]) {
                this.keys.splice(index, 1);
            }
        }
        this.storage.removeItem(key);
        this.updateKeys();
    }
};

/**
 * 清空所有資料
 */
EasyWebStorage.prototype.clearAll = function () {
    var storage = this.storage;
    this.keys.forEach(function (key) {
        storage.removeItem(key);
    });
    this.keys = [];
    this.updateKeys();
};