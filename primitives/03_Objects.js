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