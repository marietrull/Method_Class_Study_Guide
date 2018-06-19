console.log("Method + Class Review")

// METHOD --> a procedure associated with a message and an object

// OBJECT --> mostly made of data and behavior
// - the data and behavior form the interface that an object presents to the outside world/user
// - can be represented as variables, a data structure, a function, or a method.

// EX: A window is an object with the methods open and close. The state stores properties to tell the object whether it is opened or closed. 

// CLASS --> a template for creating objects
// - when we create a new object, we say we are "instantiating"
// - we are creating a new instance of the class


// Class names should always be capitalized
class Person {
	// We use the constructor to give the class properties
	constructor (name, eyeColor, hairColor){
		// You can hard code in properties --> we know that each Person instance will always have 2 arms and 2 legs. 
		this.arms = 2;
		this.legs = 2;
		// Properties associated with input parameters
		this.eyes = eyes;
		this.hair = hair;
		this.name = name;
	}
}