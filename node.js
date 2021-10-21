const fs = require('fs');
fs.writeFile("read.txt", "my name is meghana patil", (err) => {
    console.log("file created");
});

fs.readFile("read.txt", "utf-8", (err, data) => {
    console.log(data);
});