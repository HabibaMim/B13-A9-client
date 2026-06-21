'use client';

import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import { Check } from "@gravity-ui/icons";
import toast from 'react-hot-toast';
import { authClient, signIn } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    
    const router =useRouter();
        const handleLogin = async(e)=>{
    
            e.preventDefault();
            const formData = new FormData(e.currentTarget)
            
            const loginData =Object.fromEntries(formData.entries())
            const { data, error } = await signIn.email({
        ...loginData,
        })

        
        if (error){
            //console.log(error.message)
            toast.error("Invalid email or password")
            return;
        }
    if(!error){
        router.push('/')
         toast.success("Login successful!");
      }
    
       
    };

    const handleGoogleLogin = async ()=>{

        await authClient.signIn.social({
    provider: "google",
  });
    }
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-amber-100 p-8">

                <p className="font-bold text-3xl text-center text-amber-900 mb-6">
                    Login
                </p>

                <Form onSubmit={handleLogin} className="flex flex-col gap-5" validationBehavior="native">

                    <TextField isRequired name="email" type="email">

                        <Label className="text-amber-900 font-medium">
                            Email
                        </Label>

                        <Input
                            className="border-amber-200 w-full focus:border-amber-500 focus:ring-amber-500"
                            placeholder="abcd@example.com"
                        />

                        <FieldError />
                    </TextField>

                    <TextField
                                            isRequired
                                            minLength={6}
                                            name="password"
                                            type="password"
                                            validate={(value) => {
                                                if (value.length < 6) {
                                                    return "Password must be at least 6 characters";
                                                }
                                                if (!/[A-Z]/.test(value)) {
                                                    return "Password must contain at least one uppercase letter";
                                                }
                                                if (!/[a-z]/.test(value)) {
                                                    return "Password must contain at least one lowercase letter";
                                                }
                                                return null;
                                            }}
                                        >
                                            <Label className="text-amber-900 font-medium">Password</Label>
                    
                                            <Input
                                                className="w-full border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                                                placeholder="Enter your password"
                                            />
                    
                                            <Description className="text-xs text-gray-500">
                                                Must be at least 6 characters with 1 uppercase and 1 lowercase letter
                                            </Description>
                    
                                            <FieldError />
                                        </TextField>

                    <Button
                        className="bg-amber-900 hover:bg-amber-800 text-white w-full flex items-center justify-center gap-2"
                        type="submit"
                    >
                        <Check />
                        Login
                    </Button>

                    <Link
                        className="w-full text-center text-amber-900 font-medium pt-1 rounded-lg transition"
                        href="/register"
                    >
                        Don’t have an account? Register
                    </Link>

                    <div className="flex items-center gap-3 my-2">

                        <div className="flex-1 h-px bg-amber-100"></div>

                        <p className="text-sm text-gray-500">Or</p>

                        <div className="flex-1 h-px bg-amber-100"></div>

                    </div>

                    <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-3 bg-amber-100 hover:bg-amber-200 text-amber-900 py-2 rounded-lg transition">

                        <svg aria-label="Google logo" width="16" height="16" viewBox="0 0 512 512">
                            <g>
                                <path d="m0 0H512V512H0" fill="#fff"></path>
                                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                            </g>
                        </svg>

                        Continue with Google

                    </button>

                </Form>

            </div>

        </div>
    );
};

export default LoginPage;