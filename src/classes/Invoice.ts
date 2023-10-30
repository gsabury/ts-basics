import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Invoice implements HasFormatter {

    //Define Properties
    readonly client: string;
    private details: string;
    public amount: number;

    // Create constuctor to initialize the properties
    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}