import {Router} from 'express'
import passport from "passport";

const router = Router();


router.route('/').get(passport.authenticate('google', {scope: ['profile', 'email']}));

export default router
