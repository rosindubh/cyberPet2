//phil welsby 16 aug 2021
let input = prompt("Enter your name here:") //input is the players name
const welcome = document.getElementById("welcome")
welcome.textContent = `Hello ${input} Welcome to CyberPet`;
const Dog = document.getElementById("dog");
const Cat = document.getElementById("cat");
const Rabbit = document.getElementById("rabbit");
whichPet = document.getElementById("which-pet");

//main class
class animal {
    constructor(name) {
    this._name = name;
    this._hunger = 10;
    this._thirst = 69;
    this._bored = 49;
    
    if (this._hunger < 30) {
        console.log(`${this.name} is hungry`);
    }
    if (this._thirst < 70) {
        console.log(`${this.name} is thirsty`);
    }
    if (this._bored < 50) {
        console.log(`${this.name}  is bored`);
        }
    }
        
    get name() {
    return this._name;
    }
    get hunger() {
    return this._hunger;
    }
    eat() {
    this._hunger--;
    }
    }
    
//subclass dog
class dog extends animal {
    constructor(name, likesWalks) {
        super(name);
        this._likesWalks = likesWalks;
    }
}

  // subclass cat
  class cat extends animal {
    constructor(name, lovesMice) {
    super(name);
    this._lovesMice = lovesMice;}
}

  // subclass rabbit 
  class rabbit extends animal {
    constructor(name, lovesCarrots) {
    super(name);
    this._lovesCarrots = lovesCarrots;}
}

//listen for dog button
Dog.addEventListener("click", () => {
    input = new dog(input);
    welcome.textContent = `Hello my name is ${input.name} and I am a dog and my hunger is ${input.hunger}`

});
//listen for cat button
Cat.addEventListener("click", () => {
    console.log("******THIS HAS COME FROM Cat.addEventListener******")
    input = new cat(input);
    welcome.textContent = `Hello my name is ${input.name} and I am a cat.`;
    whichPet.textContent = `My hunger is ${input.hunger}`;
    startGame();
    shortDelay();
});

//listen for rabbit button
Rabbit.addEventListener("click", () => {
    input = new rabbit(input);
welcome.textContent = `Hello my name is ${input.name} and I am a rabbit and my hunger is ${input.hunger}`
});

// setTimeout function
function shortDelay() {
    setTimeout(function(){ welcome.textContent = `Ok ${input.name} Let's Play!`; }, 2500);
};

// start game
function startGame() {
    const hideButtons = document.getElementById("hide-buttons");
    hideButtons.style.display = 'block';
    hideButtons.style.display = 'none';
    let feedMeBtn = document.createElement('button');
    feedMeBtn.id = 'feedMe';
    feedMeBtn.innerHTML = 'Feed Me';
    document.body.appendChild(feedMeBtn);
    let playMeBtn = document.createElement('button');
    playMeBtn.id = 'playMe';
    playMeBtn.innerHTML = 'Play With Me';
    document.body.appendChild(playMeBtn);
    let thirstyMeBtn = document.createElement('button');
    thirstyMeBtn.id = 'thirstyMe';
    thirstyMeBtn.innerHTML = "I'm Thirsty";
    document.body.appendChild(thirstyMeBtn);
}

const theCat = new animal(input);
console.log(`${theCat.name} is the name of the cat in the game. But you call it <theCat>`);