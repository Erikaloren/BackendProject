import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const payment_schema= new mongoose.Schema(
    {
        customer_name: {type: String, required: true},
        payment_amount: {type: mongoose.SchemaTypes.Decimal128, required: true},
        currency: {type: String, required: true},
        country: {type: String},
        date: {type: Date, storeDateOnly: true},
        tax_applied: {type: Boolean},
        Email_Address: {type: String, required: true},
        Billing_Address: {type: String},
        Shipping_Address: {type: String, required: true},
        Phone_number: {type: Number, required: true}
    }
)

console.log("version mongoose es :",mongoose.version);

export default model ("Payment", payment_schema);