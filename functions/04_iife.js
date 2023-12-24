//Immediately Invoked Function Expressions (IIFE)
//Function which is executed immediately after starting

//eg: connection to the database

(
    function chai(){
        console.log('DB connected')
    }
)();  //-> named iife

((nmae)=>{
    console.log(`${nmae} connected`)
})('Gnana')