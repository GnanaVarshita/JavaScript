//Crontrol flow or Logic Flow
const isUserloggedIn = true

if(isUserloggedIn){
console.log(`Welcome User`)
}
//Comparision Check
// <,>,<=,>=,==,!=,  ===(checks even type)

const n1= '6'
const n2=6
if(!(n1===n2)){
    console.log('type is not same')
}

if(n1==n2){
    console.log('value is same')
}

//Short Hand notation :

const balance=20000
if(balance>1000) console.log('yes')

//Nested

if(balance>500){
    console.log('greater than 500')
    {
        if(balance>10000){
            console.log('greater than 10000')
        }
    }
}

const userloggedIn = true
const debitCard = true
//&& AND
if(userloggedIn&& debitCard){
    console.log('Welcome')
}

//  OR operator -> ||

