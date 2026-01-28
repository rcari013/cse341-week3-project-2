import express from "express";
import { authenticate } from "../middleware/authenticate.js";
import {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie
} from "../controllers/movies.js";

const router = express.Router();

/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Get all movies
 *     tags:
 *       - Movies
 *     responses:
 *       200:
 *         description: Successfully retrieved movies
 */
router.get("/", getAllMovies);

/**
 * @swagger
 * /movies/{id}:
 *   get:
 *     summary: Get a movie by ID
 *     tags:
 *       - Movies
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: MongoDB movie ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Movie found
 *       404:
 *         description: Movie not found
 */
router.get("/:id", getMovieById);

/**
 * @swagger
 * /movies:
 *   post:
 *     summary: Create a new movie
 *     tags:
 *       - Movies
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - director
 *               - releaseYear
 *               - genre
 *               - rating
 *               - durationMinutes
 *               - language
 *             properties:
 *               title:
 *                 type: string
 *                 example: Inception
 *               director:
 *                 type: string
 *                 example: Christopher Nolan
 *               releaseYear:
 *                 type: integer
 *                 example: 2010
 *               genre:
 *                 type: string
 *                 example: Science Fiction
 *               rating:
 *                 type: number
 *                 example: 8.8
 *               durationMinutes:
 *                 type: integer
 *                 example: 148
 *               language:
 *                 type: string
 *                 example: English
 *               isAvailable:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Movie created successfully
 */
router.post("/", authenticate, createMovie);

/**
 * @swagger
 * /movies/{id}:
 *   put:
 *     summary: Update a movie
 *     tags:
 *       - Movies
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Movie updated successfully
 *       404:
 *         description: Movie not found
 */
router.put("/:id", authenticate, updateMovie);

/**
 * @swagger
 * /movies/{id}:
 *   delete:
 *     summary: Delete a movie
 *     tags:
 *       - Movies
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Movie deleted successfully
 */
router.delete("/:id", authenticate, deleteMovie);

export default router;


// Routes for movies collection
// Logic implemented by Romelito Carino; external tools used for reference and debugging