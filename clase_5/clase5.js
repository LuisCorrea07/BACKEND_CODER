const MIN_NUMBER = 1 
const MAX_NUMBER = 20
const REPEAT_LIMIT = 10

const numbers = []
const details={15: 1}

for(let i=0; i<REPEAT_LIMIT; i++){
   const randomNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER
    numbers.push(randomNumber)
}

console.log(numbers)

numbers.forEach(number =>{
    details[number]= (details[items]|| 0) + 1
});
console.log(details)