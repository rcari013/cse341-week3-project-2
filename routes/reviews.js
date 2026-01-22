import express from "express";
import {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview
} from "../controllers/reviews.js";

const router = express.Router();

/**
 * @swagger
 * /reviews:
 *   get:
 *     summary: Get all reviews
 *     tags:
 *       - Reviews
 *     responses:
 *       200:
 *         description: Successfully retrieved reviews
 */
router.get("/", getAllReviews);

/**
 * @swagger
 * /reviews/{id}:
 *   get:
 *     summary: Get a review by ID
 *     tags:
 *       - Reviews
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: MongoDB review ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Review found
 *       404:
 *         description: Review not found
 */
router.get("/:id", getReviewById);

/**
 * @swagger
 * /reviews:
 *   post:
 *     summary: Create a new review
 *     tags:
 *       - Reviews
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - movieId
 *               - reviewerName
 *               - rating
 *             properties:
 *               movieId:
 *                 type: string
 *                 example: 696f2453627682fd45daaac5
 *               reviewerName:
 *                 type: string
 *                 example: John Doe
 *               rating:
 *                 type: number
 *                 example: 9
 *               comment:
 *                 type: string
 *                 example: Amazing movie
 *     responses:
 *       201:
 *         description: Review created successfully
 */
router.post("/", createReview);

/**
 * @swagger
 * /reviews/{id}:
 *   put:
 *     summary: Update a review
 *     tags:
 *       - Reviews
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
 *         description: Review updated successfully
 *       404:
 *         description: Review not found
 */
router.put("/:id", updateReview);

/**
 * @swagger
 * /reviews/{id}:
 *   delete:
 *     summary: Delete a review
 *     tags:
 *       - Reviews
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Review deleted successfully
 */
router.delete("/:id", deleteReview);

export default router;

// Routes for reviews collection
// Logic implemented by Romelito Carino; external tools used for reference and debugging