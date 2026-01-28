import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  if (req.session.user) {
    res.send(`You are logged in as ${req.session.user.username}`);
  } else {
    res.send("You are logged out");
  }
});

export default router;
