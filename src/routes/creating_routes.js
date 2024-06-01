import { Router } from "express";
import creatingDrivers from "../drivers/creating_drivers.js";

const creatingRoutes = Router();

creatingRoutes.post('/', creatingDrivers.createPayment);
creatingRoutes.get('/:id', creatingDrivers.Read_one_Payment);
creatingRoutes.get('/', creatingDrivers.listPayments);
creatingRoutes.put('/:id', creatingDrivers.updatePayment);
creatingRoutes.delete('/:id', creatingDrivers.deletePayment);

export default creatingRoutes;
