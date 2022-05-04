const path = require("path");

// identifies platform specific separators
console.log(path.sep);

// will normalize a path given its parts
const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

// path resolve returns an absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
