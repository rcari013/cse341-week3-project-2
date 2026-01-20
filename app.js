import express from "express";
import contactsRoutes from "./routes/contacts.js";
import { errorHandler } from "./middleware/errorHandler.js";


import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger.js";

const app = express();

app.use(express.json());

// ✅ Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.json({ message: "CSE 341 API running" });
});

app.use("/contacts", contactsRoutes);

app.use(errorHandler);

export default app;
