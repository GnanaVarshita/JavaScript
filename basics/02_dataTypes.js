"use strict";
//alert is used in browser -DOM

//ECMAScript
let name='Gnana Varshita' //String
let age=20 //Integer

//Primtive DataTypes
//Number =>(2)^53 range if number
//nigint
//String=>" "
//boolean
//null => is a stand alone value(representation of empty of a variable)
//undefined => variable is just declared but not defined
//symbol =unique


//Object

console.log(typeof name);
console.log(typeof null)
console.log(typeof undefined);

//Call by value and call by reference

//Primitive Datatypes-> call by value
//7 types: String, Number,Boolean,null , undefined, Symbol,BigInt 

//
//Reference (Non Primitive)
//Arrays, Objects, Functions
const array1=['Gnana','Varshita','Kamisetty','VIT']
let myObj ={
    name:'Gnana',
    age:'20'
}

const myFunction= function(){
    console.log('Hello World')
}
