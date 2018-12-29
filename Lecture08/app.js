$(function () {

    var $article1 = $("#article-1");

    $article1.addClass("border border-primary");

    console.log($article1.children());

    $article1.children().click(function () {
        console.log(this);
        var htmlString = this;
        $(htmlString).toggleClass("line-through");
    });

    $article1.click(function () {
        console.log(this);
        var htmlString = this;
        $(htmlString).toggleClass("line-through");
    });

    console.log($article1.find("#p1"));
    $article1.find("#p1").addClass("border border-danger");
    $article1.trigger("click");

    $article1.on("deleted", function () {
        alert("我要被刪除了");
    });

    $article1.trigger("deleted");
});