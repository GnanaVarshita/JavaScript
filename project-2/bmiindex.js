/*const button = document.querySelector('.button')
const bmi= document.getElementById('change')
button.addEventListener('click',function(e){
    if(e.target.id==='calculate'){
        bmi="Results!!"
    }
})

console.log(bmi)
*/

//form needs separate code

const form = document.querySelector('form')
//whenever form is submitted , it is done in get or post
//to server , we have stop that 

form.addEventListener('submit',function(e){
    e.preventDefault()
   const height = parseInt(document.querySelector('#height').value)
   const weight = parseInt(document.querySelector('#weight').value)
   const results = document.querySelector('#results')


   if(height ===''||height<0||isNaN(height)){
      results.innerHTML =`Please give valid  ${height}`
   }

   else if(weight ===''||weight<0||isNaN(weight)){
    results.innerHTML =`Please give valid  ${weight}`
 }

 else{
   const bmi= (weight/((height*height)/10000)).toFixed(2)
   results.innerHTML =`<span>${bmi}</span>`
 }

})