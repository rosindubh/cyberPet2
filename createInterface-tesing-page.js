// phil welsby - 20 aug 2021 - page for testing how createInterface works

//https://www.tabnine.com/code/javascript/functions/readline/createInterface

//https://nodejs.org/api/readline.html


// The following simple example illustrates the basic use of the readline module.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});
