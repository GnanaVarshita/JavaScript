//Singleton ->Constructors
const tinderUser={}
tinderUser.id='1234'
tinderUser.name='Gnana'
tinderUser.isLoggedIn=false

//console.log(tinderUser)

const regularUser ={
    email:'gnana@gmail.com',
    fullname:{
        firstname:'Gnana',
        lastname:'Varshita'
    },

}

const obj1={
    1:'a',
    2:'b'
}

const obj2={
    3:'a',
    4:'b'
}

//const obj3 =Object.assign({},obj1,obj2)

//spread obj1 and obj2 and combine them
const obj3={...obj1,...obj2}
console.log(obj3)

//Objects in arrays :
const users =[
    {
        id:1,
        name:'name1'
    },

    {
        id:2,
        name:'name2'
    }

   
]

console.log(users[1].name)

//Used in Data base ->output is in form of arrays
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))

const course = {
    coursename:'JavaScript',
    price:0,
    courseInstuctor:'Hitesh'

}

//writing clean code ->Destructing object

const {curseInstructor: instructor}= course

console.log(instructor)
//Destructuring is used in ReactJs more

//JSon
//API's give data from backend in the form of JSON
//Smetimes in array format as well

// {
//     "name":"Gnana",
//     "coursename":"JavaSript"

// }

//API's data in form of Array
// [
//     {},
//     {},
//     {},
// ]

//Go to random api's me website and explore an api result
