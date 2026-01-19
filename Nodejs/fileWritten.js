const fs = require('fs');
fs.writeFile('output.txt', "writting file", (err) => {
  if (err) console.log("error occurred");
  else console.log('File written successfuly');
});