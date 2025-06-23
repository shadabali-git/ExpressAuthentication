import { Router } from "express"
import linkGoogleAccountController from "../../Controllers/Authentication/LinkGoogleAccount.controller"

const router = Router()

router.route("/google").post(linkGoogleAccountController)

export default router
