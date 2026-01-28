import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";

export const configurePassport = () => {
  if (!process.env.GITHUB_CLIENT_ID || !process.env.GITHUB_CLIENT_SECRET) {
    console.warn("GitHub OAuth not set up. Skipping strategy.");
    return;
  }

  const callbackURL =
    process.env.NODE_ENV === "production"
      ? "https://cse341-week3-project-2.onrender.com/auth/github/callback"
      : "http://localhost:3000/auth/github/callback";

  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL
      },
      (accessToken, refreshToken, profile, done) => {
        done(null, profile);
      }
    )
  );

  console.log("GitHub OAuth strategy loaded");
};

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));
