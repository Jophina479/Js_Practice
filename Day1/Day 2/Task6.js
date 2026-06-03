class Product {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class FoodProduct extends Product {

    constructor(name, price, expiryDate) {
        super(name, price);

        this.expiryDate = expiryDate;
    }

    showInfo() {
        console.log(`${this.name} expires on ${this.expiryDate}`);
    }
}

const food1 = new FoodProduct("Milk", 3, "2026-06-01");

food1.showInfo();


