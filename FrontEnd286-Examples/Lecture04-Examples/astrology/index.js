$(function () {
    $("#btn").click(function () {
        var ansValue = $("[name=ans]:checked").val();
        $("[id^=description]").slideUp();
        var id = "#description" + ansValue;
        $(id).slideDown();
    });
});