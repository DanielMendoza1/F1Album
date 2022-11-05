import { Router } from "express";
import {
  getTeam,
  getTeams
} from "../controllers/teams.controllers.js";

const router = Router();

router.get("/teams", getTeams);

router.get("/team/:id", getTeam);

export default router;
