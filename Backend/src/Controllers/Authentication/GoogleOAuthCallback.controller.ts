import type { Request, Response } from "express"
import { FrontEndURL } from "../../config/environment"
import GoogleOAuthService from "../../services/Authentication/GoogleOAuth.service";

const googleOAuthCallbackController = async (req: Request, res: Response) => {
    try {
        const user = req.user as { token: string; profile: any }

        if (!user || !user.token) {
            return res.redirect(`${FrontEndURL}/login?error=auth_failed`)
        }
        await GoogleOAuthService(user.profile)
        // Redirect to frontend with token
        res.redirect(`${FrontEndURL}/oauth-callback?token=${user.token}&auth=google`)
    } catch (error) {
        console.error("Google OAuth callback error:", error)
        res.redirect(`${FrontEndURL}/login?error=server_error`)
    }
}

export default googleOAuthCallbackController
