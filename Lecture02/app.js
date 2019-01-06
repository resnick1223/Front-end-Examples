var student = {
    id: "HTML001",
    name: "帽子哥",
    email: "resnick1223@gmail.com",
    sayHello: function () {
        console.log("Hello");
    }
};

var pokemon1 = {
    nationalId: 1,
    name: "Bulbasaur",
    hp: 30,
    attack: function (other) {
        other.hp = other.hp - 5;
    }
};

var pokemon2 = {
    nationalId: 2,
    name: "Ivysaur",
    hp: 35,
    attack: function (other) {
        other.hp = other.hp - 10;
    }
};

student.sayHello();

console.log("Pokemon1 攻擊前");
console.log(`Pokemon1 HP:${pokemon1.hp}`);
console.log(`Pokemon2 HP:${pokemon2.hp}`);
pokemon1.attack(pokemon2);
pokemon2.attack(pokemon1);


console.log("Pokemon1 攻擊後");
console.log(`Pokemon1 HP:${pokemon1.hp}`);
console.log(`Pokemon2 HP:${pokemon2.hp}`);