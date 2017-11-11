module.exports = class Player{
    constructor(id, stats=false){
        this.id = id;
        this.cards = [];
        if(stats){
            this.stats = stats;
        } else {
            this.stats = {
                points: 0
            }
        }
    }

    get Cards(){
        return this.cards;
    }

    get points(){
        return this.stats.points;
    }

    addCard(card){
        this.cards.push(card);
    }

    playCard(pick, card){
        let array = [];
        for(let i = 0; i < card.length; i++){
            if(pick == i) break;
            array.push(this.cards[card[i]]);
        }
        for(let i = 0; i < array.length; i++){
            let index = this.cards.indexOf(array[i]);
            this.cards.splice(index, 1);
        }
        return array;
    }

    won(){
        this.stats.points++;
    }

}
