const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8080'

export interface LoginResponse {
    success: boolean
    message: string
    token?: string
    userDetails?: never
}

export interface RegisterResponse {
    token?: string
    message?: string
}

export const authService = {
    // Login with email and password
    login: async (email: string, password: string): Promise<LoginResponse> => {
        const response = await fetch(`${API_BASE_URL}/api/v1/login/user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })

        return await response.json()
    },

    // Register new user
    register: async (email: string, username: string, password: string): Promise<RegisterResponse> => {
        const response = await fetch(`${API_BASE_URL}/api/v1/create/user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, username, password }),
        })

        return await response.json()
    },

    // Get user details using token
    getUserDetails: async (token: string) => {
        const response = await fetch(`${API_BASE_URL}/api/v1/get/user`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        if (!response.ok) {
            throw new Error("Failed to fetch user details")
        }

        return await response.json()
    },

    // Link Google account
    linkGoogleAccount: async (token: string, googleId: string) => {
        const response = await fetch(`${API_BASE_URL}/api/v1/link/google`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ googleId }),
        })

        return await response.json()
    },

    // Get Google OAuth URL
    getGoogleAuthUrl: () => {
        return `${API_BASE_URL}/auth/google`
    },
}
