const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data received user ${name} with id: ${id}`);
});

customEmitter.on("response", () => {
  console.log(`Some other logic here`);
});

// provide arguments for the parameters in the .on method cb fn
customEmitter.emit("response", "John", 34);
