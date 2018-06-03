var Random = require('./Random');

var random = new Random();

for (var count = 0; count < 3; count++) {
    console.log(random.next(1, 7));
}