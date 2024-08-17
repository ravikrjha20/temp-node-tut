const _=require('lodash')
const items=[1,[2,[3,[4]]]]
const newitem=_.flatten(items)
console.log(newitem)
