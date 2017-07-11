console.log("strings.js");

//just like arrays, strings have are iterable
//and have properties like length and index

let phrase = "The quick brown fox and the brown cat ate at the Taco House";

//phrase index of T: 0
console.log("phrase index of T:", phrase.indexOf("T"));
// phrase index of fox: 16
console.log("phrase index of fox:", phrase.indexOf("fox"));
// phrase length: 59
console.log("phrase length:", phrase.length);
//if it doesn't exist, returns -1 ... index of z: -1
console.log("index of z:", phrase.indexOf("z"));

// let newPhrase = phrase.replace("brown", "yellow");
// //newPhrase The quick yellow fox and the brown cat ate at the Taco House
// console.log("newPhrase", newPhrase);

//newPhrase The quick yellow fox and the yellow cat ate at the Taco House
//global replace
let newPhrase = phrase.replace(/brown/g, "yellow");
console.log("newPhrase", newPhrase);


//there are methods to extract parts of strings
//again, similar to arrays
let greeting = "Hello Cohort 21";
//start at the third (inclusive) end at the second (exclusive)
let newGreeting = greeting.slice(3,8);
console.log("newGreeting", newGreeting);
// newGreeting lo Co

//The split() method is used to split a string into an array of substrings, 
//and returns the new array.
//Tip: If an empty string ("") is used as the separator, 
//the string is split between each character.
//Note: The split() method does not change the original string.
let phraseSplit = phrase.split(" ");
console.log("phraseSplit", phraseSplit);

let exciting = "Goodbye class";
let excitingUpper = exciting.toUpperCase();
console.log("excitingUpper", excitingUpper);
//excitingUpper GOODBYE CLASS


let newDialog = greeting.concat(" and ", exciting);
console.log("newDialog", newDialog);
// newDialog Hello Cohort 21 and Goodbye class








