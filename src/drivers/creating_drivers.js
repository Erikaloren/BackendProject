import creating_models from "../models/creating_models.js"
import mongoose from "mongoose";

const creatingDrivers = {
    createPayment: async (request, answer) => {
      try {
        const newPayment = new creating_models(request.body);
  
        // Access the date string from the request body
        const dateString = request.body.date;
  
        // Convert the date string to ISO 8601 format
        let formattedDate;
        try {
          const dateObject = new Date(dateString);
          if (isNaN(dateObject.getTime())) {
            throw new Error("Invalid date format");
          }
          formattedDate = dateObject.toISOString().split('.')[0] + 'Z';
        } catch (error) {
          console.error("Error parsing date:", error.message);
          answer.json({
            answer: "failed",
            message: "Invalid date format. Please use YYYY-MM-DD format.",
            info: null,
          });
          return;  // Exit the function if date parsing fails
        }
  
        // Assign the formatted date to the newPayment object (assuming there's a date property)
        newPayment.date = formattedDate;

        const taxAppliedValue = request.body.tax_applied;

      // Validate the value (optional - assuming "yes" or "no" are expected)
      if (taxAppliedValue !== 'yes' && taxAppliedValue !== 'no') {
        throw new Error("Invalid value for tax_applied. Please use 'yes' or 'no'.");
      }

      // Assign the mapped boolean value to the newPayment object
      newPayment.tax_applied = taxAppliedValue === 'yes';

  
        const paymentCreated = await newPayment.save();
        if (paymentCreated._id) {
          answer.json({
            answer: "worked",
            message: "payment created",
            info: paymentCreated._id,
          });
        }
      } catch (error) {
        answer.json({
          answer: "failed",
          message: "something went wrong",
          info: error,
        });
        console.log("error:", error);
      }
    },

    Read_one_Payment: async (request, answer) => {
        try {
          const paymentId = request.params.id; // Assuming ID is in the URL parameter
    
          // Validate the ID format (optional)
          if (!mongoose.Types.ObjectId.isValid(paymentId)) {
            throw new Error("Invalid payment ID format.");
          }
    
          const foundPayment = await creating_models.findById(paymentId);
    
          if (!foundPayment) {
            answer.json({
              answer: "not found",
              message: "Payment with the provided ID does not exist.",
              info: null,
            });
            return;
          }
    
          answer.json({
            answer: "found",
            message: "Payment details retrieved successfully.",
            info: foundPayment, // Return the entire payment object
          });
        } catch (error) {
          answer.json({
            answer: "failed",
            message: "Error retrieving payment details",
            info: error.message,
          });
          console.error("Error getting payment by ID:", error);
        }
      },

      listPayments: async (request, answer) => {
        try {
          const allPayments = await creating_models.find({}); // Find all payments
    
          answer.json({
            answer: "found",
            message: "List of all payments retrieved successfully.",
            info: allPayments, // Return an array of all payment objects
          });
        } catch (error) {
          answer.json({
            answer: "failed",
            message: "Error retrieving list of payments",
            info: error.message,
          });
          console.error("Error getting all payments:", error);
        }
      },

      updatePayment: async (request, answer) => {
        try {
          const paymentId = request.params.id; // Assuming ID is in the URL parameter
          const updateData = request.body; // Update data is sent in the request body
    
          // Validate the ID format (optional)
          if (!mongoose.Types.ObjectId.isValid(paymentId)) {
            throw new Error("Invalid payment ID format.");
          }
    
          // Validate update data (optional) - customize based on your schema
          if (!updateData.hasOwnProperty('payment_amount') || // Check for specific fields
              !updateData.hasOwnProperty('tax_applied')) {
            throw new Error("Missing required update data.");
          }
    
          const updatedPayment = await creating_models.findByIdAndUpdate(
            paymentId,
            updateData,
            { new: true } // Return the updated document
          );
    
          if (!updatedPayment) {
            answer.json({
              answer: "not found",
              message: "Payment with the provided ID does not exist.",
              info: null,
            });
            return;
          }
    
          answer.json({
            answer: "updated",
            message: "Payment details updated successfully.",
            info: updatedPayment,
          });
        } catch (error) {
          answer.json({
            answer: "failed",
            message: "Error updating payment details",
            info: error.message,
          });
          console.error("Error updating payment:", error);
        }
      },

      deletePayment: async (request, answer) => {
        try {
          const paymentId = request.params.id; // Assuming ID is in the URL parameter
    
          // Validate the ID format (optional)
          if (!mongoose.Types.ObjectId.isValid(paymentId)) {
            throw new Error("Invalid payment ID format.");
          }
    
          const deletedPayment = await creating_models.findByIdAndDelete(paymentId);
    
          if (!deletedPayment) {
            answer.json({
              answer: "not found",
              message: "Payment with the provided ID does not exist.",
              info: null,
            });
            return;
          }
    
          answer.json({
            answer: "deleted",
            message: "Payment deleted successfully.",
            info: null, // No additional info needed for deletion
          });
        } catch (error) {
          answer.json({
            answer: "failed",
            message: "Error deleting payment",
            info: error.message,
          });
          console.error("Error deleting payment:", error);
        }
      },
  };

export default creatingDrivers;