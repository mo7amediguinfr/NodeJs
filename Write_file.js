var fs = require("fs");
const content = "Hello Node";
// Asynchronous read
fs.writeFile("welcome.txt",content, function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("file created successfully!!")
});

fs.readFile("welcome.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

