// classes
export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount.toLocaleString('en-IN', { style: "currency", currency: "INR" })} for ${this.details}`;
    }
}
