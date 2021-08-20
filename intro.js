// phil welsby 20 aug 2021 - Intro to cyberPet2

const intro = "Hello and welcome to cyberPet2";
const playerName = "Enter your name to continue";

const name = "buttons";

module.exports = {
    intro,
    playerName,
    desc: "This is the buttons function page",
    noOfFunctions: 0
}


// below code borrowed from: https://nodejs.org/en/knowledge/command-line/how-to-prompt-for-command-line-input/
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name ? ", function(name) {
    console.log("Which animal do you choose? Cat   Dog   or   Rabbit");
    rl.question("Enter your choice here: ", function(choice) {
        console.log(`${name}, has chosen to be a ${choice}`);
        rl.close();
    });
});

rl.on("close", function() {
//    console.log("\nBYE BYE !!!");
    process.exit(0);
});
