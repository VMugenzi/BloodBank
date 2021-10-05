import express from "express";
import hospitalController from "../Controllers/hospitalController";

const hospitalRouter=express.Router();

hospitalRouter.post("/register",hospitalController.registerHospital);

export default hospitalRouter;