class Hero {
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
        this.skill = this.setSkill();  
    }
    
    setSkill(){
        switch (this.type){
            case 'Mage':
                return 'magic';
                break;
            case 'Warrior':
                return 'sword';
                break;
            case 'Monk':
                return 'martial arts';
                break;
            case 'Ninja':
                return 'shuriken';
                break;
        }
    }
    
    atack(){

        return `${this.name} atacked using ${this.skill}.`
    }
}

newHero1 = new Hero('Hero_1', 15, 'Mage');
console.log(newHero1.atack());
newHero2 = new Hero('Hero_2', 20, 'Warrior');
console.log(newHero2.atack());
newHero3 = new Hero('Hero_3', 25, 'Monk');
console.log(newHero3.atack());
newHero4 = new Hero('Hero_4', 30, 'Ninja');
console.log(newHero4.atack());