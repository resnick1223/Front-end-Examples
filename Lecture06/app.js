var characters = [{
    name: "Ezreal",
    hp: 100,
    mp: 105
}, {
    name: "Teemo",
    hp: 120,
    mp: 90
}, {
    name: "Ryze",
    hp: 90,
    mp: 120
}, {
    name: "Ezreal",
    hp: 100,
    mp: 105
}, {
    name: "Teemo",
    hp: 120,
    mp: 90
}, {
    name: "Ryze",
    hp: 90,
    mp: 120
}, {
    name: "Ezreal",
    hp: 100,
    mp: 105
}, {
    name: "Teemo",
    hp: 120,
    mp: 90
}, {
    name: "Ryze",
    hp: 90,
    mp: 120
}, {
    name: "Ezreal",
    hp: 100,
    mp: 105
}, {
    name: "Teemo",
    hp: 120,
    mp: 90
}, {
    name: "Ryze",
    hp: 90,
    mp: 120
}, {
    name: "Ezreal",
    hp: 100,
    mp: 105
}, {
    name: "Teemo",
    hp: 120,
    mp: 90
}, {
    name: "Ryze",
    hp: 90,
    mp: 120
}, {
    name: "Teemo",
    hp: 120,
    mp: 90
}, {
    name: "Ryze",
    hp: 90,
    mp: 120
}, {
    name: "Ezreal",
    hp: 100,
    mp: 105
}, {
    name: "Teemo",
    hp: 120,
    mp: 90
}, {
    name: "Ryze",
    hp: 90,
    mp: 120
}];

function sortByHp(a, b) {
    if (a.hp > b.hp)
        return 1;
    else if (a.hp < b.hp)
        return -1;
    else
        return 0;
}

function sortByMp(a, b) {
    if (a.mp > b.mp)
        return 1;
    else if (a.mp < b.mp)
        return -1;
    else
        return 0;
}


var $charactersTbody = $("#characters>tbody");
renderCharactersTable(characters.slice(4, 4 + 4));

$("#character-hp").click(function () {
    characters.sort(sortByHp);
    renderCharactersTable(characters);
});

$("#character-mp").click(function () {
    characters.sort(sortByMp);
    renderCharactersTable(characters);
});

function renderCharactersTable(characters) {
    $charactersTbody.html("");
    characters.forEach(function (character) {
        var rowHTML =
            `<tr>
                <td>${character.name}</td>
                <td>${character.hp}</td>
                <td>${character.mp}</td>
            </tr>`;
        var $tr = $(rowHTML);
        $tr.appendTo($charactersTbody);
    });
}

// 計算分頁需要幾個
var pages = Math.floor(characters.length / 4) +
    (characters.length % 4 == 0 ? 0 : 1);

// 繪製分頁按鈕
for (var index = 0; index < pages; index++) {
    var btnHMTL =
        `<button id="page-number-${index+1}" type="button" class="btn btn-secondary">${index + 1}</button>`;
    $btn = $(btnHMTL);
    $btn.appendTo($("#btn-pager"));
}

// 根據分頁找到起始編號
$("[id^=page-number-]").click(function () {
    var pageNumber = parseInt($(this).text());
    var start = 4 * (pageNumber - 1);
    var end = start + 4;
    // 由起始編號 取得陣列片段
    // 重新繪製表格
    renderCharactersTable(characters.slice(start, end));
});