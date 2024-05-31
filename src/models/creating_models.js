import { Schema, model } from "mongoose";

const payment_schema= new Schema(
    {
        customer_name: {type: String, required: true},
        payment_amount: {type: Number, required: true},
        currency: {type: String},
        country: {type: String},
        date: {type: Date},
        tax_applied: {type: Boolean},
    }
)

export default model ("Payment", payment_schema);