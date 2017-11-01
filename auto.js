var CAH = require("./test.js")

var game = new CAH(1);

console.log(game.join(1));
console.log(game.join(2));
console.log(game.join(3));

var start = game.start();
var blackPlayer = start.blackPlayer;

console.log(game.choose(blackPlayer, [1]))


// console.log(game);
