$(function () {

     var Fushigidane = new Pokemon(
        1,
        1200,
        ["GRASS", "POISON"],
        "Seed Pokémon",
        0.71,
        6.9,
        "Overgrow",
        [1, 226, 231, 80],
        "Fushigidane"
    );

    var Hitokage = new Pokemon(
        4,
        2000,
        ["FIRE"],
        "Lizard Pokémon",
        0.61,
        8.5,
        ["Blaze"],
        [4, 229, 234, 83],
        "Hitokage"
    );

    var pokemons = [Fushigidane, Hitokage];

    var $pokemons = [];

    for (var index = 1; index <= 3; index++) {
        $pokemons.push($("<div></div>").addClass("col-md-3").text("一隻Pokemon"));
    }

$(selector).addClass(className);
    $("#pokemons").append($pokemon1);
    $("#pokemons").append($pokemon2);
    $("#pokemons").append($pokemon3);

});