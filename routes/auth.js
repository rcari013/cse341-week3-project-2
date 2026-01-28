import express from "express";
import passport from "passport";

const router = express.Router();

// GitHub OAuth entry
router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

// GitHub OAuth callback
router.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  (req, res) => {
    req.session.user = req.user;
    res.json({
      message: "Logged in successfully",
      user: {
        username: req.user.username,
        id: req.user.id
      }
    });
  }
);

// Logout
router.get("/logout", (req, res) => {
  req.logout(() => {
    req.session.destroy(() => {
      res.json({ message: "Logged out" });
    });
  });
});

export default router;