import express from "express";
import session from "express-session";
import passport from "passport";
import authRoutes from "./routes/auth.js";
import moviesRoutes from "./routes/movies.js";
import reviewsRoutes from "./routes/reviews.js";
import { errorHandler } from "./middleware/errorHandler.js";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger.js";
import rootRoutes from "./routes/home.js";

const app = express();

app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET || "DEV_FALLBACK_SECRET",
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/auth", authRoutes);
app.use("/movies", moviesRoutes);
app.use("/reviews", reviewsRoutes);

app.use("/", rootRoutes);

app.use(errorHandler);

export default app;