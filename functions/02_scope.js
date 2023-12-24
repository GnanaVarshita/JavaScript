if(true){
    let a=10;
    const b=20;
    var c= 40;
}

// console.log(a)
// console.log(b)
//when declared in var , scope is beyond the block 
//that is why var is avoided
console.log(c)

//Intrview=> what is the difference in Global scope of node
//environment and browser console environment


//function under function

function one(){
    const username='Gnana Varshita'
    function two(){
        const website='youtibe';
        console.log(username)
    }

    //console.log(website)
    //the scope of website is only for function two
    two()
}

one()


//Hoisting?
console.log(addOne(5))
function addOne(num1){
    return num1+1
}

//we get error when accesing a function which declared 
//from variable earlier than the declared space
//console.log(addTwo(5))
const addTwo= function(num1){
    return num1+2
}

console.log(addTwo(5))