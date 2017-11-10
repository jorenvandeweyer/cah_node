## Cards Against Humanity Game Node Package ##

## Example script for implementation in a discord bot build on Discord.js##
The script can be found insides `examples/`
```javascript

var cah = require("./examples/cahgamehandler");

function cahStartCommand(msg){
	cah.start(msg);
}

function cahJoinCommand(msg){
	cah.join(msg);
}

function cahLeaveCommand(msg){
	cah.leave(msg);
}

function cahChooseCommand(msg){
	cah.choose(msg);
}

function cahResetCommand(msg){
	cah.reset(msg);
}
```
