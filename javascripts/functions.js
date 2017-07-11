console.log("functions.js");

//this function just hangs out until it's called
//expression
let returnNothing = function() {
    console.log("I return nothing");
}


//another way to write it
//declaration
function returnNothing2(){
    console.log("hey you called the second one");
}

//this will get the console log 
returnNothing();
returnNothing2();

//the difference here is interesting
//https://stackoverflow.com/questions/336859/var-functionname-function-vs-function-functionname


function addstuff(){
    let sum = 2 + 2;
    return sum
}

console.log("addstuff", addstuff());

function add(one, two){
    return one + two;
}

console.log("add 2 and 6", add(2,6));


function subtract(n1, n2){
    return n1 -n2;
}  

//you can also pass a function as a parameter to a function
function performCalculation(num1, action){
    let doneIt = action(num1);
    return doneIt;
}

let coolNumber = performCalculation(16, Math.sqrt);
console.log("coolNumber", coolNumber);














