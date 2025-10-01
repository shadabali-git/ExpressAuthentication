import {Router} from 'express'
import GoogleRedirectController from "../../Controllers/Authentication/GoogleRedirect.controller"

const router = Router();

router.route('/').get(GoogleRedirectController);

export default router
