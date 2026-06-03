// 1. Create class Vehicle
class Vehicle {

    // 2. Add constructor
    constructor(name) {
        this.name = name;
    }

    // 3. Add method drive()
    drive() {
        console.log(`${this.name} is driving`);
    }
}

// 4. Extend class Bike
class Bike extends Vehicle {

    // constructor
    constructor(name) {
        super(name);
    }

    // 5. Override drive()
    drive() {
        console.log(`${this.name} bike is moving fast`);
    }
}

// Create Bike object
const bike1 = new Bike("Yamaha");

bike1.drive();


// 6. Create class Student
class Student {

    constructor(name, marks) {
        this.name = name;

        // 7. Add marks property
        this.marks = marks;
    }

    showDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Marks: ${this.marks}`);
    }
}

// 8. Inherit class Programmer
class Programmer extends Student {

    constructor(name, marks, language) {

        // 9. Call parent method using super()
        super(name, marks);

        this.language = language;
    }

    showProgrammer() {
        console.log(`${this.name} knows ${this.language}`);
    }
}

// Create Programmer object
const p1 = new Programmer("Jophina", 90, "JavaScript");

p1.showDetails();
p1.showProgrammer();


// 10. Create multiple child classes
class Car extends Vehicle {
    drive() {
        console.log(`${this.name} car is driving`);
    }
}

class Bus extends Vehicle {
    drive() {
        console.log(`${this.name} bus is running`);
    }
}

// Objects
const c1 = new Car("Tesla");
const b1 = new Bus("Volvo");

c1.drive();
b1.drive();



