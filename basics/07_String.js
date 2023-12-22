const name1 ='Gnana '
const name2='Varshita'
console.log(name1+name2)
// `` inject any variable in a string 
console.log(`Hello my name is ${name1+name2}`);

//the values are stored in key:value pair 0:P, 1:u, 2:b
const gameName = new String('PubGsadmlm')
console.log(gameName[0])
console.log(gameName.__proto__)
// toUpperCase()
// charAt(4)
// indexOf('P')
// subString(0,3)
const another= gameName.slice(-2,1)
console.log(another)