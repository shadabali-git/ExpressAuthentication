import {Router} from "express"
import GoogleOAuthCallbackController from "../../Controllers/Authentication/GoogleOAuthCallback.controller";

const router = Router();

router.route("/").get(GoogleOAuthCallbackController)
export default router;