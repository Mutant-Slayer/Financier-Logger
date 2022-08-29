// classes
export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `You owe ${this.recipient} ${this.amount.toLocaleString('en-IN', { style: "currency", currency: "INR" })} for ${this.details}`;
    }
}
