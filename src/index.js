import "./env.js";
import express from "express";
import morgan from "morgan";

import userRoute from "./routes/userRoute.js";

const app = express();

app.use(express.json());
app.use(morgan("tiny"));

// routes
app.use(userRoute);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
