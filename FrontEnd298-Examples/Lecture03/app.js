var docRef = db.doc("/stores/0");
docRef.onSnapshot(function (doc) {
    var store = doc.data();
    $("#store-name").text(store.name);
    $("#store-address").text(store.address);
    $("#store-image-url").attr("src", store.imageUrl);
});

function save() {
    var name = $("#name").val();
    docRef.update({
        name: name
    });
}

$("#save-btn").click(save);

function addStore() {

    // 取得設定裡面的最大id
    db
        .doc("/settings/stores")
        .get()
        .then(function (doc) {
            var maxId = doc.data().maxId;
            maxId++;

            // 從畫面欄位抓資料 新增到商店物件
            var store = new Store(
                "name",
                "phone",
                "address",
                "page-url",
                "image-url"
            );

            // 把這個物件 存到雲端firebase
            // 透過FIREBASE api 參考官方教學

            db
                .doc(`stores/${maxId}`)
                .set(store.toObject())
                .then(function (doc) {
                    // 設定好了之後想做的事
                    alert("新增完成");
                    db
                        .doc("/settings/stores")
                        .update({
                            maxId: maxId
                        });
                });

            // 結束了

        });
}

$("#add-store-btn").click(addStore);