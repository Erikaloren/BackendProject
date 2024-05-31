import { response } from "express";
import creating_models from "../models/creating_models.js"

const payment_driver = {
    createPayment: async (request, response) => {
        try{
            const newPayment = new creating_models(request.body);
            const paymentCreated = await newPayment.save();
            if(paymentCreated._id) {
                respuesta.json({
                    response: "worked",
                    message: "payment created",
                    info: paymentCreated._id,
                });
            }
        }catch (error) {
            respuesta.json({
                response: "failed",
                message: "something went wrong",
                info: error, 
            });
            console.log("error:", error);
        }
    }
}

export default creatingDrivers;