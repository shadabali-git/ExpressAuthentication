import { Router } from "express"
import passport from "passport"
import googleOAuthCallbackController from "../../Controllers/Authentication/GoogleOAuthCallback.controller"

const router = Router()

router.route("/").get(passport.authenticate("google", { session: false }), googleOAuthCallbackController)

export default router
