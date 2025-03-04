import express from "express";
import * as locationController from "../controllers/user.controller.js";

const router = express.Router();

router.post("/locations", locationController.addLocations);

export default router;
