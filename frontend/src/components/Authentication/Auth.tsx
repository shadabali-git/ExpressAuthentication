import React, {useState} from "react";
import {Button} from "@/components/ui/button.tsx"
import {Input} from "@/components/ui/input.tsx"
import {useNavigate} from "react-router-dom";
import axios from 'axios'

const Auth: React.FC = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [formData, setFormData] = useState<{ name: string, email: string, password: string, }>({
        name: '',
        email: '',
        password: ''
    });

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setFormData({...formData,[e.target.name]: e.target.value})
    }
    const handleSubmit = async () => {

        if (!isLogin) {
            const registerResponse = await axios.post('http://localhost:8080/api/v1/create/user', {
                email: formData.email,
                password: formData.password
            })
            if (registerResponse) {
                setIsLogin(true);
            }

        } else {

            navigate('/')
        }

    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">{isLogin?'Login':'Register'}</h2>
                <form onSubmit={handleSubmit}>
                    {!isLogin &&
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                className="mt-1"
                                name='name'
                                value={formData.name}
                                onChange={handleFormChange}
                            />
                        </div>
                    }
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="mt-1"
                            name='email'
                            value={formData.email}
                            onChange={handleFormChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            className="mt-1"
                            name='password'
                            value={formData.password}
                            onChange={handleFormChange}
                        />
                    </div>
                    <Button type='submit' className="w-full bg-green-600 text-white hover:bg-green-700 mt-4">
                        {isLogin ? 'Login' : 'Register'}
                    </Button>
                </form>
                <Button className="mt-4 text-sm text-gray-500 text-center" onClick={() => setIsLogin((prev) => !prev)}>
                    {isLogin ? "Don't Have Account" : "Already have an account?"}
                </Button>
            </div>
        </div>
    )
}
export default Auth
