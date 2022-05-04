// require lodash
const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
// flatten array
const newItems = _.flattenDeep(items);
console.log(newItems);
