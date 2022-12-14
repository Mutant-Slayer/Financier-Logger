import { HasFormatter } from "../interfaces/HasFormatter.js";

// classes
export class Invoice implements HasFormatter {

    constructor(
        private client: string,
        private details: string,
        private amount: number
    ) { }

    format() {
        return `${this.client} owes ${this.amount.toLocaleString('en-IN', { style: "currency", currency: "INR" })} for ${this.details}`;
    }
}