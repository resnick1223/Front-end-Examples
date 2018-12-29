$(function () {

    var pokemon = new Pokemon(
        "Spinarak",
        32,
        32,
        "male",
        4.66,
        0.38,
        ["BUG", "POISON"],
        {
            stardust: 800,
            candy: 1
        }, 50,
        ["Bug Bite", "Night Slash"]);

    var player = new Player(
        "Resnick", 242858, { "Spinarak": 22 }
    );

    function Render() {
        var $pokemonName = $(".pokemon-name");
        $pokemonName.text(pokemon.name);
        var $pokemonHp = $(".pokemon-hp");
        $pokemonHp.text(pokemon.currentHp + "/" + pokemon.hp);

        var $playerCandy = $(".player-candy");
        $playerCandy.text(player.candy[pokemon.name]);
    }

    Render();
});