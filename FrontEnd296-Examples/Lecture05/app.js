$(function () {

    //#region 建立學生清單
    // 1. 取得student-list元素
    var $studentList = $("#student-list");
    // document.querySelector("#student-list");

    // 建立一個夾子
    db.collection("students")

        .onSnapshot(function (snapshot) {

            var count = 1;
            snapshot.docChanges.forEach(function (change) {

                if (change.type === "added") {
                    //#region 建立一個li元素


                    // 2.1 新增一個li
                    // 建立一個li元素 
                    var $li = $(`<li id=${change.doc.id}></li>`);

                    // 2.2 內容是 student 加上 編號 
                    var content = "student " + (count < 10 ? "0" + count : count) + " name: " + change.doc.data().name;
                    $li.text(content);
                    // 2.3 將 li 附加到 清單
                    $li.appendTo($studentList);
                    //#endregion
                    if (change.doc.data().done) {
                        $li.addClass("done");
                    }

                    var $image = $("<img>");
                    $image.attr("src", change.doc.data().imageUrl);
                    $image.attr("class", "circle");
                    $image.appendTo($li);

                    $li.click(function (e) {
                        db
                            .collection("students")
                            .doc(e.target.id)
                            .update({
                                done: !$li.hasClass("done")
                            });
                        $li.toggleClass("done");
                    });
                    count++;
                }


            });

        });


    // 3. 做10次 
    //#endregion

    //#region 建立卡片列表

    var $cards = $("#cards");


    for (var count = 1; count <= 10; count++) {
        //1. 先建立一個card

        // 1.1 貼上卡片的html
        var html = `
    <div class="card">
    <img src="https://picsum.photos/400/300">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
`;

        var $col = $(`<div class="col-md-4"></div>`);
        $col.html(html);
        $col.appendTo($cards);
    }



    //

    //#endregion
});