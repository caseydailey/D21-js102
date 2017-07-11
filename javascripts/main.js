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

for (var potato = 0; potato < jedi.length; potato++) {
    //jediText is incrementally assigned each value
    jediText += `<li>${jedi[potato]}</li>`;
}
document.getElementById("demo").innerHTML = jediText;


