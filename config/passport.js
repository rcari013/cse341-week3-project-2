import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";

export const configurePassport = () => {
  if (!process.env.GITHUB_CLIENT_ID || !process.env.GITHUB_CLIENT_SECRET) {
    console.warn("GitHub OAuth not set up. Skipping strategy.");
    return;
  }

  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL:
          process.env.GITHUB_CALLBACK_URL ||
          "http://localhost:3000/auth/github/callback"
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
