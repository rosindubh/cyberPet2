// phil welsby 20 aug 2021 - Intro to cyberPet2

const intro = "intro";

let readline = require('readline');
let fs = require('fs');

let myInterface = readline.createInterface( {
  input: fs.createReadStream('welcomePage.txt')
});

let lineno = 0;
myInterface.on('line', function (line) {
  lineno++;
  console.log(line);
});


//const intro = "intro";

module.exports = {
    intro,
//    playerName,
    desc: "This is the buttons function page",
    noOfFunctions: 0
}

// webpage on how to use createInterface
// https://www.tabnine.com/code/javascript/functions/readline/createInterface

// below code borrowed from: https://nodejs.org/en/knowledge/command-line/how-to-prompt-for-command-line-input/
//const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name ? ", function(name) {
    console.log("Which animal would you like to be? \nCat   Dog   or   Rabbit");
    rl.question("Enter your choice here: ", function(choice) {
        console.log(`${name}, the ${choice} is now your cyberPet`);
        rl.close();
    });
});

//rl.on("close", function() {
//    console.log("\nBYE BYE !!!");
//    process.exit(0);
//});

