import express from "express";
import donationController from "../Controllers/donationController";


const donationRouter=express.Router();

donationRouter.post("/create",donationController.createDonation);
donationRouter.get("/all",donationController.getAllDonations);
donationRouter.get("/:id",donationController.getOneDonation);
donationRouter.patch("/:id",donationController.updateOneDonation);
donationRouter.delete("/:id",donationController.deleteOneDonation);


export default donationRouter;