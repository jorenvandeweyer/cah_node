const cards = require("./content/cards");
const Player = require("./src/player");
const round = require("./src/round");

module.exports = class CAH {
    constructor(owner, packs="Base", cards=5, rounds=5){
        if(cards < 3){
            cards = 3;
        }
        if(rounds < 1){
            rounds = 1;
        }

        this.owner = owner;
        this.packs = packs;
        this.cards = cards;
        this.rounds = rounds;

        this.currentRound = 0;

        this.whiteCards = [];
        this.blackCards = [];
        this.players = {};

        this.fillDecks();
    }

    static get packs(){
        return cards.order;
    }

    private get whiteCard(){
        if(this.whiteCards.length == 0){
            this.fillDecks(black=false);
        }

        return this.whiteCards.splice(Math.floor(Math.random()*this.whiteCards.length), 1);
    }

    get blackCard(){
        if(this.blackCards.length == 0){
            this.fillDecks(white=false);
        }

        return this.blackCards.splice(Math.floor(Math.random()*this.blackCards.length), 1);
    }

    get round(){
        return this.round;
    }

    fillDecks(white=true, black=true){
        for (let i = 0; i<this.packs.length; i++){
            if(cards.order.includes(this.packs[i])){
                let pack = cards[this.packs[i]];
                if(white){
                    this.whiteCards = this.whiteCards.concat(pack.white);
                }
                if(black){
                    this.blackCards = this.blackCards.concat(pack.black);
                }
            }
        }
        if(this.whiteCards.length == 0 || this.blackCards == 0){
            this.packs.push("Base");
            this.fillDecks()
        }
    }

    addPlayer(id){
        let player = new Player(id);

        while(player.getCards.length < this.cards){
            player.addCard(this.whiteCard);
        }

        this.players[id] = player;
    }

    start(){
        if (Object.keys(players).length <= 3){
            return {
                status: "error",
                description: "Not enough players yet!"
            }
        }

        return this.nextRound();
    }

    nextRound(){
        if(this.currentRound++ >= this.rounds){
            return {
                status: "finished",
                description: "The game is finished, start another one!"
            }
        }
        let blackPlayer = Obecjt.keys(players)[Math.floor(Math.random()*Object.keys(players).length)];
        let blackCards [];

        while(blackCards.length < this.cards){
            blackCards.push(this.blackCard);
        }

        return {
            status: "round"
            blackPlayer: blackPlayer,
            blackCards: blackCards
        }
    }


}
