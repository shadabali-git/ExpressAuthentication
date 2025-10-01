import type {Request, Response} from "express"
import {FrontEndURL, GoogleClientSecret} from "../../config/environment"
import {BackendURL, GoogleClientID} from '../../config/environment'
import axios from "axios";
import UserModel from "../../Models/User.model";
import generateToken from "../../services/Authentication/GenerateToken";
import {UserType} from "../../types/UserType";

const GoogleOAuthCallbackController = async (req: Request, res: Response) => {

// 1. RECEIVE THE AUTHORIZATION CODE
    const code = req.query.code as string;

    if (!code) {
        console.error('No authorization code received from Google.');
        return res.redirect(`${FrontEndURL}/login-error?reason=no_code`);
    }

    try {
        // 2. EXCHANGE THE CODE FOR TOKENS (Secure Server-to-Server Call)
        const tokenExchangeResponse = await axios.post(
            'https://oauth2.googleapis.com/token',
            {
                code, // The temporary code from Google
                client_id: GoogleClientID,
                client_secret: GoogleClientSecret, // Client Secret used here
                redirect_uri: BackendURL, // Your Backend Callback URL
                grant_type: 'authorization_code',
            },
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        );

        const {access_token} = tokenExchangeResponse.data;

        // 3. RETRIEVE USER PROFILE DATA
        const userProfileResponse = await axios.get(
            'https://www.googleapis.com/oauth2/v3/userinfo',
            {
                headers: {Authorization: `Bearer ${access_token}`}, // Use Access Token to get data
            }
        );
        const userData = userProfileResponse.data;
        if (!userData.sub) {
            return res.redirect(`${FrontEndURL}/login-error?reason=no_user`);
        }
        let AlreadyExistsInMongo: UserType | null = await UserModel.findOne({email: userData.email});

        if (!AlreadyExistsInMongo) {
            AlreadyExistsInMongo = await UserModel.create({
                email: userData.email,
                email_verified: userData.email_verified,
                username: userData.name,
                given_name: userData.given_name,
                family_name: userData.family_name,
                picture: userData.picture,
                googleId: userData.sub,
            })
        } else if (!AlreadyExistsInMongo.googleId) {
            AlreadyExistsInMongo = await UserModel.findOneAndUpdate({
                    email: userData.email,
                },
                {
                    $set: {
                        googleId: userData.sub,
                        email_verified: userData.email_verified,
                        username: userData.name,
                        given_name: userData.given_name,
                        family_name: userData.family_name,
                        picture: userData.picture,
                    }
                }, {new: true})
        }
        if (!AlreadyExistsInMongo) {
            return res.redirect(`${FrontEndURL}/login-error?reason=user creation failed`);
        }
        const token = generateToken(AlreadyExistsInMongo);

        return res.redirect(`${FrontEndURL}/landing?token=${token}`);
    } catch
        (error: any) {
        // Handle Token exchange failure
        console.error('OAuth Process Failed:', error.response?.data || error.message);
        // Consistency fix: Use FrontEndURL for error redirect
        return res.redirect(`${FrontEndURL}/login-error?reason=oauth_failed`);
    }

}

export default GoogleOAuthCallbackController

