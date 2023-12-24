const user ={
    username: 'Gnana',
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
    }
}

//this keyword refers to the current context
user.welcomeMessage()

//the global object in browser is window
//printing this is console should point window object as it is global
//this is node points to an empty object
console.log(this)

function chai(){
    let username='Gnana'
   console.log(this.username)
    //it will give undefined
}

//Arrow Function

const arrow =()=>{
    let username='Gnana'
   console.log(this.username)
}

arrow()


const add = (num1,num2) =>{
    return num1+num2
}
console.log(add(6,7))

//returning an object in Arrow function
const objret = () =>({username:'Gnana'})


console.log(objret)