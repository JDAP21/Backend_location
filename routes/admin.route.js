import express from "express";
import * as locationController from "../controllers/admin.controller.js";

const router = express.Router();

router.get("/locations", locationController.getLocations);

export default router;
