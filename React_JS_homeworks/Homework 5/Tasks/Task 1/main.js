function FirstFactorial(num) {
    let factorial = num;
    if(num > 1){
        while(num !== 1){
           num--;
           factorial = factorial * num;
        }
   }
   else if(num === 1){
       factorial = 1
   }
   else{
       factorial = "-_-"
   }
   return factorial
}

const g = FirstFactorial(10)
console.log(g)
