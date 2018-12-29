function Pokemon(nationalNo, hp, type, species, height, weight, abilities, localNo, japanese) {
    this.nationalNo = nationalNo;
    this.hp = hp;
    this.type = type;
    this.species = species;
    this.height = height;
    this.weight = weight;
    this.abilities = abilities;
    this.localNo = localNo;
    this.japanese = japanese;
    this.attack = function (other) {
        other.hp -= 20;
    };
}

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

$(function () {

    function Render() {
        $("#fushigidane-name").text(Fushigidane.japanese);
        $("#fushigidane-hp").text(Fushigidane.hp);
        $("#hitokage-name").text(Hitokage.japanese);
        $("#hitokage-hp").text(Hitokage.hp);
    }

    Render();
    $("#fushigidane-btn").click(function () {
        Fushigidane.attack(Hitokage);
        Render();
    });

    $("#hitokage-btn").click(function () {
        Hitokage.attack(Fushigidane);
        Render();
    });

});