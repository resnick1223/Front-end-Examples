function render() {
    var $seats = $("#seats");
    for (var row = 1; row <= 3; row++) {
        var id = `row-${row}`;
        var rowInnerHTML = `<div id="${id}">${id}</div>`;
        var $rowDiv = $(rowInnerHTML);
        for (var col = 1; col <= 6; col++) {
            var $seat = $(`<img src="https://static.thenounproject.com/png/3949-200.png" width="50">`);
            $seat.appendTo($rowDiv);
        }
        $rowDiv.appendTo($seats);
    }
}

render();