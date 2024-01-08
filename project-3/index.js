const clock=document.getElementById('clock')
//document.querySelector('#clock')


//Controls the events in javascript
setInterval(function(){
    let date = new Date();
    //console.log(date.toLocaleTimeString())
    clock.innerHTML= date.toLocaleTimeString()
    
},1000)