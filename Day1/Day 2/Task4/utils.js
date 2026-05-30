export function formatCurrency(amount) {
    return `$${amount}`;
}

export function generateRandomId() {
    return Math.floor(Math.random() * 1000);
}

export function getTodayDate() {
    return new Date().toDateString();
}