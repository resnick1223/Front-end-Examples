var numbers = [30550, 25500, 41500];
var total = 0;
for (var index = 0; index < numbers.length; index++) {
    var number = numbers[index];
    total = total + number;
}

console.log(total);

total = 0;
numbers.forEach(function (number) {
    total = total + number;
});

console.log(total);