console.log("main2.js" );

//initialize an object
let myDog = {};

//set a property for name and breed using dot notation
myDog.name = "mr. butters";
myDog.breed = "houndDog";
myDog.gender = "male";
myDog.age = 6;

//we can assign properties whose value are functions
//these are called methods
myDog.speak = function(){
    console.log("woof");
}

//we can invoke this with the () operator
myDog.speak();

//note: you can access these properties too:
myDogsName = myDog.name
console.log("myDogsName", myDogsName);

//lets view the whole object
console.log("myDog", myDog);

//we can also iterate through each property in the object
for (let prop in myDog){
    console.log(prop, myDog[prop]);
}

//now lets build an array of objects
let ourDogs = [];
ourDogs.push({owner: "Brenda", name: "Esme", breed: "Twist", age: 6});
ourDogs.push({owner: "Casey", name: "Mr. Butters", breed: "houndDog", age: 3});
ourDogs.push({owner: "Matt", name: "LunchBox", breed: "Wild Man", age: 6});
ourDogs.push({owner: "Brook", name: "Little Wurst", breed: "Mutt", age: 0});
console.log("ourDogs", ourDogs);

//and now for the forEach()

ourDogs.forEach(function(dog){
    console.log(`${dog.name} is a ${dog.breed}`);
});





