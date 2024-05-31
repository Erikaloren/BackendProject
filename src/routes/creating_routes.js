import { Router } from "express";
import creatingDrivers from "../drivers/creating_drivers.js";

const paymentRoutes = Router();

paymentRoutes.post('/', creating_drivers.createPayment);

export default creating_routes;
