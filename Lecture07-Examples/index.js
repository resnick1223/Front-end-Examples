$(function () {
    var Storage = require('easy-storage-resnick');
    var db = new Storage("localStorage");
    var notes = db.addCollection("notes");
    render();


    function deleteArticle(evt) {
        var id = evt.target.id;
        notes.delete(id);
        render();
    }


    function render() {
        var $notes = $('#notes');
        $notes.html("");
        notes.data.forEach(function (note) {

            var $note = $('<article></article>');
            $note.attr('id', note.id);
            var $h3 = $('<h3></h3>');
            $h3.text(note.title).appendTo($note);
            var $p = $('<p></p>');
            $p.text(note.text).appendTo($note);

            $note.appendTo($notes);
            $note.click(deleteArticle);
        });
    }



    $("#save-btn").click(function () {
        var note = {
            title: $("#note-title").val(),
            text: $("#note-text").val()
        };
        notes.insert(note);
        render();
    });

});