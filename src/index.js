import "./env.js";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";

import json from "./middlewares/json.js";

import routes from "./routes/index.js";
import { genericErrorHandler } from "./middlewares/errorHandler.js";
import rateLimiter from "./middlewares/rateLimiter.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(helmet());
app.use(compression());
app.use(morgan("tiny"));
app.use(json);
app.use(rateLimiter);

// routes
app.use("/api", routes);
app.use(genericErrorHandler);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
