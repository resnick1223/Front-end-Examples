// 定義Store類別

// Store類別的建構函式
function Store(nameId, phoneId, addressId, pageUrlId, imageUrlId) {

    // 這個物件的name = 傳進來的name
    this.name = $("#" + nameId).val();
    this.phone = $("#" + phoneId).val();
    this.address = $("#" + addressId).val();
    this.pageUrl = $("#" + pageUrlId).val();
    this.imageUrl = $("#" + imageUrlId).val();
}

Store.prototype.toObject = function () {
    return JSON.parse(JSON.stringify(this));
};