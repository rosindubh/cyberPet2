//phil welsby 18 aug 2021

// variables
let playerName = prompt("Enter your name here:") //input is the players name
if (playerName == "") {
    playerName = "Cooking Fat";
}
hungerThreshold = 30;
thirstThreshold = 60;
boredThreshold = 70;

//animal class
class animal {
    constructor(name) {
        this._name = name;
        this._hunger = 100;
        this._thirst = 100;
        this._bored = 69;
    }
    get name() {
        return this._name;
    }
    get hunger() {
        return this._hunger;
    }
    get thirst() {
        return this._thirst;
    }
    get bored() {
        return this._bored;
    }
}
// instance of animal class called theCat
theCat = new animal(playerName);
// output to console
console.log(`Hi I'm the cat and my name is ${theCat.name}`);
console.log(`My hunger is  ${theCat.hunger}`);
console.log(`My thirst is  ${theCat.thirst}`);
console.log(`My bordem is  ${theCat.bored}`)

// if else statement to check levels NOTE: this might be better as a function
if (theCat.hunger < 30) {
    console.log(`${theCat.name} the cat is hungry, my hunger needs to be ${hungerThreshold} and it is currently ${theCat._hunger}`);
};
if (theCat.thirst < 60) {
    console.log(`${theCat.name} the cat is thirsty. My thirst needs to be ${thirstThreshold} and it's currently ${theCat.thirst} `)
};
if (theCat.bored < 70) {
    console.log(`${theCat.name} the cat is bored play with me. My bordem is ${theCat.bored} and it needs to be ${boredThreshold}`)
};


