import express from "express";
import hospitalController from "../Controllers/hospitalController";

const hospitalRouter=express.Router();

hospitalRouter.post("/register",hospitalController.registerHospital);
hospitalRouter.get("/signinHospital",hospitalController.signinHospital);
hospitalRouter.get("/allh",hospitalController.getAllHospitals);
hospitalRouter.get("/:id",hospitalController.getOneHospital);
hospitalRouter.patch("/:id",hospitalController.updateOneHospital);
hospitalRouter.delete("/:id",hospitalController.deleteOneHospital);

export default hospitalRouter;