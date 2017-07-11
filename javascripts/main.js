"use strict";

//another little conditional
let  skyIsBlue = true;
// if (skyIsBlue) {
//     console.log("yeah the sky is blue");
// } else {
//     console.log('hmmm what color is the sky?');
// }

//and what about ternary?

skyIsBlue ?  console.log("yeah the sky is blue") : console.log('hmmm what color is the sky?')

//lets play with an array
let jedi = ["Skywalker", "Yoda", "Obi-wan", "Qui-Gon", "Windu"];
let jediText = "";

//good ole length property
console.log("how many jedi?", jedi.length);

for (var i = 0; i < jedi.length; i++) {
    console.log('what is i?', i);
}

//explain that i is a variable
for (var potato = 0; potato < jedi.length; potato++) {
    console.log('what potatos potato?', potato);
}

//but of course, this is just a number you can get the value of that index
//through bracket notation
for (var potato = 0; potato < jedi.length; potato++) {
    //jediText is re-asssigned each time
    jediText = jedi[potato];
    console.log('current jedi:', jediText);
}

for (var potato = 0; potato < jedi.length; potato++) {
    //jediText is incrementally assigned each value
    jediText += jedi[potato];
}
console.log('all the jedis:', jediText);

//now let's grab an element on the DOM!
//document.getElementById("demo").innerHTML = jediText;

//that's cool, but kind of ugly

for (var i = 0; i < jedi.length; i++) {
    //jediText is incrementally assigned each value
    jediText += `<li> Jedi number ${i} is ${jedi[i]}</li>`;
}
document.getElementById("demo").innerHTML = jediText;

let colors = [ "red", "yellow", "blue", "green", "orange", "purple"];

//reverse
let reverseColors = colors.reverse();
console.log("reverseColors", reverseColors);

//sort (alphabetical)
let sortedColors = colors.sort();
console.log("sortedColors", sortedColors);

//doesn't quite work as expected cause sort just looks at the first number
let numbers = [1, 2, 5, 100, 73, 84, 88];
// let sortedNumbers = numbers.sort();
// console.log("sorted number", sortedNumbers);

//but if we pass in a sort function to specify how to
//handle each item...
//each item is 
// let sortedNumbers = numbers.sort(function(first, second) {
//     console.log("first", first);
//     console.log("second", second);
//     console.log("first - second = ", first - second);
//     return first - second;
// });

// console.log("better sortedNumbers", sortedNumbers);

let fruits = ["Peaches", "Orange", "Lemon", "Banana", "Mango"];
//first param is where to start (exclusive, and second is where wo stop (inclusive))
let citrus = fruits.slice(1,3);
console.log("citrus", citrus);
//fruits is still fruits
console.log("fruits",fruits);

//wanna add to the end? use push
fruits.push("Strawberry");
console.log("pushed fruits", fruits);

//wanna get the last item? pop it.
let lastItem = fruits.pop();
console.log("lastItem", lastItem);

//this actually removed it from the array:
console.log("fruits popped", fruits);

// now let's play with modulus
// write a loop that starts at 100 and decrements a variable by 1.
// If the number is even add the number to the beginning of the array, else add it to the end

let evenOdds = [];
for (var i = 100; i >= 0 ; i--) {
    if (i % 2 === 0){
        evenOdds.unshift(i);
    } else {
        evenOdds.push(i);
    }
}
console.log("evenOdds", evenOdds);



