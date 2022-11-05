import { Router } from "express";
import {
  getDriver,
  getDrivers
} from "../controllers/drivers.controller.js";

const router = Router();

router.get("/drivers", getDrivers);

router.get("/driver/:id", getDriver);

export default router;
