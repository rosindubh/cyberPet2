// phil welsby - 20 aug 2021 - page for testing how createInterface works

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

// Once this code is invoked,
// the Node.js application will not terminate until the readline.
// Interface is closed because the interface waits for data to be
// received on the input stream.

