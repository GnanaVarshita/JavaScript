// Just like cells are building blocks of body and atoms are
// building blocks of things  fuctions are building blocks of 
// ur software product

//num1 and num2 are parameters
function addTwoNumbers(num1,num2){
    console.log(num1+num2)
}

//the passing numbers are arguments
addTwoNumbers(10,40)
//addTwoNumbers(10,a)

function loginUserMessage(username){
    return `${username} just logged in `
}

console.log(loginUserMessage('Gnana Varshita'))
//when no values are passed then undefined just logged in

//use if-else to check the username
function loginUserMessage1(username){
    if(username===undefined){
        return('Please enter valid username')
        
    }
    return `${username} just logged in `
}
console.log(loginUserMessage1())

//rest operator( ...)

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,200,400,500,800))

function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
      total += arg;
    }
    return total;
  }
  
  console.log(sum(1, 2, 3));
  // Expected output: 6
  
  console.log(sum(1, 2, 3, 4));
  // Expected output: 10

//pass an object into function
const user={
    username:'Gnana',
    password:'Varshita'
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and password is ${anyobject.password}`)
}

//we can pass an object which is predefined and also an object 
//where we can define while passing as arguments

handleObject(user)
handleObject({
    username:'ncjsdnc',
    passwor:'bcjsdb'

})
handleObject({
    username:'ncjsdnc',
    password:'bcjsdb'

})

const myNewArray=[200,900,400,600]

function returnsecond(getArr){
    return getArray[1]
}

console.log(myNewArray)

