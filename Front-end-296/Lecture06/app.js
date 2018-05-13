var cart = [];

// 1.取得一個產品的文件
// 1.1 建立一個文件的參考
var productsRef = db.collection("products");
// 1.2 使用文件參考取得資料
productsRef.get().then(function (snapshot) {
    // 2. 產生一張卡片，將內容替換成產品的資訊
    // 2.1 取得產品資料，建立產品物件
    snapshot.forEach(function (doc) {
        var product = doc.data();
        // 2.2 建立顯示用的模板
        var html =
            `<div class="card" id="${doc.id}">
      <img class="card-img-top" src="${product.imageUrl}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">儲存空間:${product.storage}GB <br> 售價:${product.price}元</p>
        <a href="#" class="btn btn-primary" data-product-id="${doc.id}">購買</a>
      </div>
    </div>`;
        // 2.3 建立product 元素
        var $product = $(`<div class="col-md-3"></div>`);
        $product.html(html);

        // 3. 把卡片追加到products中
        $("#products").append($product);

        var $btn = $(`#${doc.id} .btn`);
        $btn.click(function () {
            var productId = $btn.attr("data-product-id");
            db
                .doc(`/products/${productId}`)
                .get()
                .then(function (doc) {
                    var selectedProduct = doc.data();
                    console.log(selectedProduct);
                    // 把資料加入購物車
                    cart.push({
                        product: selectedProduct,
                        count: 1
                    });
                    // 繪製表格
                    render();

                });

        });
    });

});


function render() {
    //var $row = $("")
    $("#order-content").html("");
    var total = 0;
    cart.forEach(function (record) {
        var $row = $("<tr>");
        var html = `
        <td>${record.product.name} - ${record.product.storage}GB</td>
        <td>${record.product.price}</td>
        <td>${record.count}</td>
        <td>${record.product.price * record.count}</td>`;
        $row.html(html);
        $row.appendTo($("#order-content"));
        total += record.product.price * record.count;
    });
    $("#total").text(`${total}元`);
}