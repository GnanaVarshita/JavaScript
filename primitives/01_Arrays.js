// Shallow copy :
//of an object is a copy whose properties 
// share the same reference (point to the same underlying values)
// as those of the source object from which the copy was made

//Deep Copies

const myArr=[0,1,2,3,4,5]
const myArr2=new Array(1,2,4,5,5);

//prototype is avoilable for arrays

//Array methods
myArr.push(6) //.pop

//console.log(myArr.toString())
myArr.unshift(9)
console.log(myArr)

myArr.shift()
console.log(myArr)

const strarr= myArr.join()
console.log(strarr)
console.log(strarr.length)

//slice,spice

const myn1= myArr.slice(1,3)
console.log(myn1);
console.log(myArr)

//splice manipulates the original Array
console.log(myArr.splice(1,3))
console.log(myArr)

const caps=['A','B','C','D']
const smalls=['a','b','c','d']

