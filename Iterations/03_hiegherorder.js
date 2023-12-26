// for of
const arr =[1,2,3,4,5]

for (const num of arr) {
    //console.log(num)
}

const greetings ='Hello World'

for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

//Maps
//map is an object itself , holds key-value pair
const map = new Map()
map.set('IN','India')
map.set('USA', 'United States')
map.set('FR','France')

console.log(map)

for (const [key,value] of map) {
    console.log(key, ':-' ,value)
}

//maps are iteratable but not objects (try forof loop for this myObj)
const myObj={
    'game1':'dncsj',
    'game2':'nsjcn'
}


const myObj1={
    js : 'javascript',
    cpp :'C++',
    rb: 'ruby',
    swift : 'swift by apple'
}

//use forin loop

for (const key in myObj1) {
    console.log(`${key} shortcut is ${myObj1[key]}`)
}


//for each 
const coding = ['js','ruby','swift','go','java']

coding.forEach(element => {
    console.log(element)
});

// for each loop in objects

const obj =[
{
    language:'telugu',
    state:'AP',
},

{
    language:'tamil',
    state:'TN',
},
{
    language:'Kannada',
    state:'Karnataka',
},
{
    language:'hindi',
    state:'pura',
},


]

obj.forEach(element => {
    console.log(element.language);
});