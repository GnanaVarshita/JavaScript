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

