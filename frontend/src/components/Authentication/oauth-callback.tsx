import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAppDispatch } from '@/hooks/redux';
import { setUserDetails, setToken, setLoading } from '@/redux/features/UserDetailsSlice';

const OAuthCallback = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');

        if (!token) {
            navigate('/login?error=missing_token');
            return;
        }

        // Save token to Redux and localStorage
        dispatch(setToken(token));
        localStorage.setItem('token', token);

        // Fetch user details using token
        const fetchUserDetails = async () => {
            dispatch(setLoading(true));
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/get/user`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                // console.log("Oauth -call back ",response.data);
                dispatch(setUserDetails(response.data.userDetails));
                navigate('/');
            } catch (error) {
                console.error('Failed to fetch user:', error);
                dispatch(setUserDetails(null));
                dispatch(setToken(null));
                navigate('/login?error=user_fetch_failed');
            } finally {
                dispatch(setLoading(false));
            }
        };

        fetchUserDetails();
    }, [navigate, dispatch]);

    return <p>Logging in with Google...</p>;
};

export default OAuthCallback;
