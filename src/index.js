import "./env.js";
import express from "express";
import morgan from "morgan";

import routes from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(morgan("tiny"));

// routes
app.use("/api", routes);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
