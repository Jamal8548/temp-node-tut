const _ = require("lodash");
const items = [5, [6, [7, [8]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
