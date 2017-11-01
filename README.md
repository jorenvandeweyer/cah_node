## Cards Against Humanity Game Node Package ##

## Example script for implementation in a discord bot ##

```javascript

const CAH = require("./cah")

function broadcastCahMessages(msg, array){
	for (let i = 0; i < array.length; i++){
		let data = array[i];

		var message;
		if(data.description){
			message = data.description;
		}

		if(data.id != undefined && message.includes("%player")){
			message = message.replace("%player", "<@" + data.id + ">");
		}

		message = createEmbed("purple", message.replace(/_/g, "\\_"));
		send(msg, message);

		if(data.private != undefined){
			for(let j = 0; j < data.id_private.length; j++){
				bot.users.get(data.id_private[j]).send(data.description_private[j].replace(/_/g, "\\_"));
			}
		}
	}
}

function cahCommand(msg){
	if(game == undefined){
		let message = createEmbed("purple", "No CAH game playing atm, type &cstart to start a game");
		send(msg, message);
		return;
	}
	var data = game.choose(msg.author.id, msg.params);
	broadcastCahMessages(msg, data);
}

function cahStartCommand(msg){
	if(game == undefined){
		game = new CAH(1);
		let message = createEmbed("purple", "CAH Game started, type &cjoin to join!");
		send(msg, message);
		return;
	} else {
		let data = game.start();
		broadcastCahMessages(msg, data);
	}
}

function cahLeaveCommand(msg){
	if(game == undefined){
		let message = createEmbed("purple", "No CAH Game playing.");
		send(msg, message);
	} else {
		let data = game.leave(msg.author.id);
		broadcastCahMessages(msg, data);
	}
}

function cahJoinCommand(msg){
	if(game == undefined){
		let message = createEmbed("purple", "No CAH Game playing atm, type &cstart to start a game");
		send(msg, message);
	} else {
		let data = game.join(msg.author.id);
		broadcastCahMessages(msg, data);
	}
}
```
