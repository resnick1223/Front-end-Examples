var colors = ['red', 'green', 'blue'];

console.log('use for loop');
for (var index = 0; index < colors.length; index++) {
    console.log(colors[index]);
}
console.log("use forEach");
var index = 0;
colors.forEach(function (element) {
    console.log(element);
    index++;
});