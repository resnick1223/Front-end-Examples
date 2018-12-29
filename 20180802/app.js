db
    .collection("stores")
    .onSnapshot(function (snapshot) {
        // 每次有資料變化 就清空所有的店家 以便於重新繪製
        $("#stores").html("");
        snapshot.forEach(function (doc) {
            console.log(doc.data());
            // 建立store變數 儲存從firebase抓來的資料
            var store = doc.data();

            // 建立一個store的html的範本 
            var html = `<div id="store-${doc.id}">
        <h3 class="store-name">${store.name}</h3>
        <p class="store-address">${store.address}</p>
        <img class="store-image-url" src="${store.imageUrl}">
    </div>`;

            // 透過範本來建立一個元素
            var $store = $(html);

            // 附加到 stores這個元素
            $store.appendTo($("#stores"));
            console.log($store);
        });
    });