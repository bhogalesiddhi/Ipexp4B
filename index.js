class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello = () => {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person("Siddhi", 20);
person1.sayHello();

class Student extends Person {
    constructor(name, age, rollNo) {
        super(name, age); // Call the constructor of the parent class
        this.rollNo = rollNo;
    }

    // Override the sayHello method
    sayHello = () => {
        console.log(`Hello, I am a student. My name is ${this.name}, I am ${this.age} years old, and my roll number is ${this.rollNo}.`);
    }

    // Method to check and set the roll number
    setRollNo(rollNo) {
        if (rollNo <= 0) {
            throw new Error("Error : Roll number must be a positive integer.");
        }else {
           
        this.rollNo = rollNo;}
    }
}

// Create a Student object and demonstrate usage
try {
    const student1 = new Student("Shivani", 23, -9);
    student1.sayHello();

    // Attempt to set an erroneous roll number
    student1.setRollNo(0);
} catch (error) {
    console.error(error.message);}