//generate a random color
const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i =0;i<6;i++){
       color += hex[Math.floor(Math.random()*16)]
    }
   // console.log(color)
    return color
}
console.log(randomColor())

let intervalId;
const startChangingColor= function(){
  //
  function changeBgColor(){
    document.body.style.backgroundColor= randomColor()
  }
   if(!intervalId){
    intervalId=setInterval(changeBgColor,1000)
   }
}

const stopChangingColor= function(){
 clearInterval(intervalId)
 intervalId=null
 //document.body.style.backgroundColor="white"
}

document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)


//two events
let numberInterval;
const startChangingNumber= function(){
  const number=document.getElementById('number')

  function changeNumber(){
    number.innerHTML=Math.floor(Math.random()*10)
  }

  if(!numberInterval){
    numberInterval=setInterval(changeNumber,1000)
  }
  
  
}

const stopChangingNumber= function(){
    clearInterval(numberInterval)
    numberInterval=null
}
document.querySelector('#start').addEventListener('click',startChangingNumber)
document.querySelector('#stop').addEventListener('click',stopChangingNumber)
//console.log(parseInt(Math.random()*16))