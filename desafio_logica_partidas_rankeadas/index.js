class Hero{
    constructor(name, victoryCount, defeatCount){
        this.name = name;
        this.victoryCount = victoryCount;
        this.defeatCount = defeatCount;
        this.victoryDiff = victoryCount - defeatCount;
    }

    xpLevel(){

        let xpLevel;

        if(this.victoryDiff < 10){
            xpLevel = "Ferro";
        } else if(this.victoryDiff < 20){
            xpLevel = "Bronze";
        } else if(this.victoryDiff < 50){
            xpLevel = "Prata";
        } else if(this.victoryDiff < 80){
            xpLevel = "Ouro";
        } else if(this.victoryDiff < 90){
            xpLevel = "Diamante";
        } else if(this.victoryDiff < 100){
            xpLevel = "Lendário";
        } else{
            xpLevel = "Imortal";
        }

        return `${this.victoryDiff}; => level: ${xpLevel}!`;
    }
}

let name = "VicdaRocha";
let victoryCount = 170;
let defeatCount = 20;

let newHero = new Hero(name, victoryCount, defeatCount);
console.log(newHero.xpLevel());