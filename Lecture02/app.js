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