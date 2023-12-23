//singleton ->Object.create
//object literals

//key:value
const JsUser={
    name:'Gnana Varshita',
    age:20,
    email:'gnanavarshitagv@gmail.com',
    isLoggedIn:true
}

console.log(JsUser.name)
console.log(JsUser['email'])

JsUser.greeting= function(){
    console.log('Hello Js User ,')
}

JsUser.greetingTwo= function(){
    console.log(`Hello Js User , ${this.name}`)
}

JsUser.greeting()
JsUser.greetingTwo()


