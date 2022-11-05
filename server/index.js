import express from "express";
import { PORT } from "./config.js";
import router from "./routes/index.routes.js";
import teamsRoutes from "./routes/teams.routes.js"
import driversRoutes from "./routes/drivers.routes.js"

const app = express();

app.use(express.json());

app.use(teamsRoutes);
app.use(driversRoutes);
app.use(router);

app.listen(PORT);