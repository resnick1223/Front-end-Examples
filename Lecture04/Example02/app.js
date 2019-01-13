// 建立產品清單資料

var products = [{
        id: "DYAJDN-19009LXS9",
        name: "Apple iPhone XR (64G)-紅色",
        price: 25999
    },
    {
        id: "DYAJDO-A9009N894",
        name: "Apple iPhone XR (128G)-黑色",
        price: 27888
    },
    {
        id: "DYAJCZ-19009FC5C",
        name: "Apple 2018 iPad 128G WiFi 銀Apple Pencil",
        price: 16990
    }
];
// 購物車 陣列
var shoppingCart = [];

// 點擊加入購物按鈕事件
function addToShoppingCart(index) {
    // 如何知道點到了第幾個 假設是第index個
    shoppingCart.push(index);
    //shoppingCart.push(products[index]);
    // 重新繪製購物車內容
    renderShoppingCart();
}


// 繪製產品清單
function renderProductList() {
    $("#product-list").html("");
    // pokemons 的 每一個 pokemon
    products.forEach(function (product, index) {
        var productHTML =
            `
        <div class="col-md-4">
                    <div class="card border-primary mb-3" style="max-width: 20rem;">
                        <div class="card-body">
                            <h4 class="card-title">${product.name} (${product.id})</h4>
                            <p class="card-text">Price: ${product.price}</p>
                        </div>
                        <div class="card-footer">
                            <div class="btn btn-lg btn-primary" onclick="addToShoppingCart(${index})">加入購物車</div>
                        </div>
                    </div>
                </div>
        `;

        $(productHTML).appendTo($("#product-list"));
    });
}

// 繪製購物車內容
function renderShoppingCart() {
    $("#shopping-cart").html("");
    // pokemons 的 每一個 pokemon
    shoppingCart.forEach(function (productIndex) {

        var product = products[productIndex];
        var productHTML =
            `
        <div class="col-md-4">
                    <div class="card border-primary mb-3" style="max-width: 20rem;">
                        <div class="card-body">
                            <h4 class="card-title">${product.name} (${product.id})</h4>
                            <p class="card-text">Price: ${product.price}</p>
                        </div>
                    </div>
                </div>
        `;

        $(productHTML).appendTo($("#shopping-cart"));
    });
}



$(function () {
    renderProductList();
});