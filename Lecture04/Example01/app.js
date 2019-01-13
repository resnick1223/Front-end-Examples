// 準備資料
var pokemons = [{
        id: 1,
        name: "Bulbasaur",
        chineseName: "妙蛙種子",
        hp: 30,
        maxHp: 40
    },
    {
        id: 1,
        name: "Bulbasaur",
        chineseName: "妙蛙種子",
        hp: 43,
        maxHp: 43
    },
    {
        id: 1,
        name: "Bulbasaur",
        chineseName: "妙蛙種子",
        hp: 20,
        maxHp: 20
    },
    {
        id: 2,
        name: "Ivysaur",
        chineseName: "妙蛙草",
        hp: 60,
        maxHp: 60
    },
    {
        id: 2,
        name: "Ivysaur",
        chineseName: "妙蛙草",
        hp: 55,
        maxHp: 55
    },
    {
        id: 3,
        name: "Venusaur",
        chineseName: "妙蛙花",
        hp: 200,
        maxHp: 200
    }
];

// 提供比較HP的方法或函式
function compareHp(pokemon1, pokemon2) {
    if (pokemon1.hp > pokemon2.hp)
        return 1;
    else if (pokemon1.hp < pokemon2.hp)
        return -1;
    else
        return 0;
}

function compareMaxHp(pokemon1, pokemon2) {
    if (pokemon1.maxHp > pokemon2.maxHp)
        return 1;
    else if (pokemon1.maxHp < pokemon2.maxHp)
        return -1;
    else
        return 0;
}

// 點擊事件處理器 clickEventHandler
function sortHp() {
    // 根據比較方法 修改資料
    pokemons.sort(compareHp);
    // 重新繪製畫面
    render();
}

function sortMaxHp() {
    // 根據比較方法 修改資料
    pokemons.sort(compareMaxHp);
    // 重新繪製畫面
    render();
}



// 繪製畫面
function render() {
    console.log(pokemons);
    $("#pokemons").html("");
    // pokemons 的 每一個 pokemon
    pokemons.forEach(function (pokemon) {
        var pokemonHTML =
            `
        <div class="col-md-4">
                    <div class="card border-primary mb-3" style="max-width: 20rem;">
                        <div class="card-body">
                            <h4 class="card-title">${pokemon.chineseName} (${pokemon.name})</h4>
                            <p class="card-text">HP: ${pokemon.hp} / ${pokemon.maxHp}</p>
                        </div>
                    </div>
                </div>
        `;

        $(pokemonHTML).appendTo($("#pokemons"));
    });
}

// 當打開畫面的時候 進行繪製
$(function () {
    render();
});