import passport from "passport"
import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import { GoogleClientID, GoogleClientSecret } from "./environment"
import googleOAuthService from "../services/Authentication/GoogleOAuth.service"

passport.use(
    new GoogleStrategy(
        {
            clientID: GoogleClientID,
            clientSecret: GoogleClientSecret,
            callbackURL: "/auth/google/callback",
            scope: ["profile", "email"],
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                const token = await googleOAuthService(profile)
                done(null, { profile, token })
            } catch (error) {
                done(error, false)
            }
        },
    ),
)

