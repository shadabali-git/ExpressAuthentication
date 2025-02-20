import React, {useState} from "react";
import {Button} from "@/components/ui/button.tsx"
import {Input} from "@/components/ui/input.tsx"
import { Cross2Icon } from "@radix-ui/react-icons";
import { Loader2 } from "lucide-react";
import * as Dialog  from "@radix-ui/react-dialog";
import Swal from 'sweetalert2'

import axios from 'axios'

interface DialogComponentProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isLogin: boolean;
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}
const AuthDialogue:React.FC<DialogComponentProps> = ({ open, setOpen ,isLogin,setIsLogin}) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const showAlert = (title:string,message:string,icon:"success"|"error") => {
        Swal.fire({
            title: title,
            text: message,
            icon: icon,
            timer: 3000,
            timerProgressBar: true,

        });
    };


    const [formData, setFormData] = useState<{ name: string, email: string, password: string, }>({
        name: '',
        email: '',
        password: ''
    });

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setFormData({...formData,[e.target.name]: e.target.value})
    }
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          setIsLoading(true);
        if (!isLogin) {
            console.log('first step')
            try {
                const registerResponse = await axios.post('http://localhost:8080/api/v1/create/user', {
                    email: formData.email,
                    password: formData.password,
                    username: formData.name
                })
                if (registerResponse) {
                    setFormData({name: '', email: '', password: ''})
                    setOpen(false);
                    showAlert("Success","Account Created","success")
                }
            }catch (e) {
                console.log(e)
                showAlert("Something Wrong","Registration Failed","error")
            }

        } else {
            try{

                const loginResponse = await axios.post('http://localhost:8080/api/v1/login/user', {
                    email: formData.email,
                    password: formData.password
                })
                if (loginResponse) {
                    setFormData({name: '', email: '', password: ''})
                    setOpen(false);
                    showAlert("Login Success","","success")
                }
            }catch (e) {
                console.log(e)
                showAlert("Something Wrong","Login Failed","error")

            }

        }
        setIsLoading(false);

    }

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>

            <Dialog.Portal >
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
                <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <Dialog.Title className="text-2xl font-bold text-center text-gray-800 mb-6">{isLogin?'Login':'Register'}</Dialog.Title>
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
                    <div className="flex justify-between items-center">
                        <Button type='submit' className="text-white">
                            {isLoading? <Loader2/>:isLogin ? 'Login' : 'Register'}
                        </Button>
                        <Button type='button' variant="ghost" onClick={() =>{setIsLogin((prev) => !prev)}}>
                            {isLogin ? "Don't Have Account" : "Already have an account?"}
                        </Button>
                    </div>

                </form>


                    <Dialog.Close asChild className="absolute cursor-pointer font-extrabold top-4 right-4">

                            <Cross2Icon />

                    </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>

    </Dialog.Root>
    )
}
export default AuthDialogue
