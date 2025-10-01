import type {Request, Response} from "express"
import {BackendURL, FrontEndURL, GoogleClientID, JWT_Secret} from "../../config/environment"

const googleRedirectController = async (req: Request, res: Response) => {
    try {
        const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth'

        const options = {
            // 🚨 IMPORTANT: These values should come from your .env file
            redirect_uri: BackendURL,
            client_id: GoogleClientID,
            access_type: 'offline',
            response_type: 'code',
            prompt: 'consent',
            scope: [
                'https://www.googleapis.com/auth/userinfo.profile',
                'https://www.googleapis.com/auth/userinfo.email',
            ].join(' '),
        };

        const qs = new URLSearchParams(options);
        const googleAuthUrl = `${rootUrl}?${qs.toString()}`;
        return res.redirect(googleAuthUrl);
    } catch (error) {
        console.error("Google OAuth callback error:", error)
        res.redirect(`${FrontEndURL}/login?error=server_error`)
    }
}

export default googleRedirectController
