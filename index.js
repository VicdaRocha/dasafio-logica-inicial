class Hero{
    constructor(name, xpPoints){
        this.name = name;
        this.xpPoints = xpPoints;
    }

    xpLevel(){

        let xpLevel;

        if(this.xpPoints < 1000){
            xpLevel = "Ferro";
        } else if(this.xpPoints < 2000){
            xpLevel = "Bronze";
        } else if(this.xpPoints < 5000){
            xpLevel = "Prata";
        } else if(this.xpPoints < 7000){
            xpLevel = "Ouro";
        } else if(this.xpPoints < 8000){
            xpLevel = "Platina";
        } else if(this.xpPoints < 9000){
            xpLevel = "Ascendente";
        } else if(this.xpPoints < 10000){
            xpLevel = "Imortal";
        } else{
            xpLevel = "Radiante";
        }

        return `${this.name}: level ${xpLevel}!`;
    }
}

let name = "VicdaRocha";
let xpPoints = 10000;

let newHero = new Hero(name, xpPoints);
console.log(newHero.xpLevel());