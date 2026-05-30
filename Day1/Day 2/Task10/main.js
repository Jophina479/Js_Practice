import { API_URL } from "./config.js";
import { formatPrice } from "./utils.js";
import { Product } from "./product.js";

console.log(API_URL);

function fetchProducts() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve([
                new Product("Phone", 500),
                new Product("Laptop", 1200)
            ]);

        }, 1000);

    });
}

async function loadProducts() {

    const products = await fetchProducts();

    products.forEach(product => {

        console.log(
            `${product.name} - ${formatPrice(product.price)}`
        );

    });
}

loadProducts();