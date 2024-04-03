// npm - comes with node
// package.json - manifest file (stores important info about project/package)


const x = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = x.flattenDeep(items)

console.log(newItems)