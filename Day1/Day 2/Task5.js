class Product {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getInfo() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price}`);
    }
}

const p1 = new Product("Laptop", 1200);

p1.getInfo();


// Output:
Product: Laptop
Price: $1200