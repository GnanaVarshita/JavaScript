let score = '99'

console.log(typeof score)
let valueInNumber = Number(score)
console.log(typeof valueInNumber)

// the conversion works even for the string to number also
let score2= '99ad'
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2)
//look at the console , it prits NaN
console.log(valueInNumber2)

//'99'=>99
//'99abd'=>NaN