import { HasFormatter } from "../interfaces/HasFormatter.js";

// classes
export class Payment implements HasFormatter {

    constructor(
        private recipient: string,
        private details: string,
        private amount: number
    ) { }

    format() {
        return `You owe ${this.recipient} ${this.amount.toLocaleString('en-IN', { style: "currency", currency: "INR" })} for ${this.details}`;
    }
}