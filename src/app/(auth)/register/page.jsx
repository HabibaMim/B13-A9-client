"use client";
import React from 'react';
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import toast from 'react-hot-toast';
import { authClient, signUp } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
const router =useRouter();
    const handleRegister = async(e)=>{

        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        
        const registerData =Object.fromEntries(formData.entries())
        const { data, error } = await signUp.email({
    ...registerData,
    })
    if (error){
        //console.log(error.message)
        toast.error("Registration Failed!")
        return;
    }
if(!error){
    router.push('/login')
    toast.success("Registration successful! Please login.");
  }

    
};

const handleGoogleSignUp = async ()=>{

        await authClient.signIn.social({
    provider: "google",
  });
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">

            <div className="w-full max-w-md bg-white border border-amber-100 shadow-xl rounded-2xl p-8">

                <p className="font-bold text-3xl text-center text-amber-900 mb-6">
                    Sign Up
                </p>

                <Form onSubmit={handleRegister} className="flex flex-col gap-5">
                    
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                        validate={(value) => {
                            if (!/^[a-zA-Z\s'-]+$/.test(value)) {
                                return "Please enter a valid name";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-amber-900 font-medium">Name</Label>
                        <Input
                            className="w-full border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                            placeholder="Enter your name"
                        />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-amber-900 font-medium">Email</Label>
                        <Input
                            className="w-full border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                            placeholder="abcd@example.com"
                        />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="image"
                        type="url"
                        validate={(value) => {
                            if (!value || value.trim() === "") {
                                return "Photo URL is required";
                            }
                            if (!/^https?:\/\/.+\..+/.test(value)) {
                                return "Please enter a valid URL (must start with http:// or https://)";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-amber-900 font-medium">Photo URL</Label>
                        <Input
                            className="w-full border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                            placeholder="https://example.com/photo.jpg"
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

                    <div className="flex gap-3">

                        <Button
                            className="bg-amber-900 hover:bg-amber-800 text-white flex-1 flex items-center justify-center gap-2"
                            type="submit"
                        >
                            <Check />
                            Register
                        </Button>

                        <Button
                            className="bg-gray-100 text-gray-700 flex-1 hover:bg-gray-200"
                            type="reset"
                            variant="secondary"
                        >
                            Reset
                        </Button>

                    </div>

                    <Link
                        className="w-full text-center text-amber-900 font-medium pt-1 rounded-lg transition"
                        href="/login"
                    >
                        Already have an account? Login
                    </Link>

                    <div className="flex items-center gap-3 my-2">

                        <div className="flex-1 h-px bg-amber-100"></div>
                        <p className="text-sm text-gray-500">Or</p>
                        <div className="flex-1 h-px bg-amber-100"></div>

                    </div>

                    <button onClick={handleGoogleSignUp} className="w-full flex items-center justify-center gap-3  bg-amber-100 hover:bg-amber-200 text-amber-900 py-2 rounded-lg transition">

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

export default RegisterPage;