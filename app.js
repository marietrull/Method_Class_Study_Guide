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
		this.name = name;
		this.eyeColor = eyeColor;
		this.hairColor = hairColor;
	}
	// Classes can also have methods
	eat () {
		console.log(this.name + " is eating.")
	}
	sleep () {
		console.log(this.name + " is now sleeping.")
	}
}

// Instantiate the class (this is where we create an object based on the class)

// marie is now an instance of the Person class
const marie = new Person('Marie', 'Brown', 'Brown');
console.log(marie);

// Have marie interact with methods associated with the class

marie.eat();
marie.sleep();


// INHERITANCES --> this occurs when we grab all of the properties and methods from one class with the intention of allowing another class to use them. 


// extends Person tells us to reference the Person class
class Athlete extends Person {
	constructor (name, eyeColor, hairColor, sportsPlayed){
		// super allows us to reference the Person class's constructor.
		super (name, eyeColor, hairColor);
		// Add new properties that are unique to the Athlete class
		this.athlete = true;
		this.sportsPlayed = sportsPlayed
	}
}

// Instantiate the class (again, this is where we create an object based on the class)

const soccerMarie = new Athlete ('Marie', 'Brown', 'Brown', 'Soccer');
console.log(soccerMarie);
