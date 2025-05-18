"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Register() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phoneNumber: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError('')

        try {
            const response = await fetch('http://167.86.100.138:3000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    phoneNumber: formData.phoneNumber || undefined // Send undefined if empty
                })
            })

            const data = await response.json()

            if (data.status === 'success') {
                // Registration successful, redirect to login page
                router.push('/login')
            } else {
                setError(data.message || 'Registration failed')
            }
        } catch (err) {
            setError('An error occurred during registration')
            console.error('Registration error:', err)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <section className="talking-section overflow-hidden space-top">
                <div className="container">
                    <div className="row g-4 align-items-xl-center flex-row-reverse justify-content-between">
                        <div className="col-md-6 ">
                            <div className="talking-contact-box">
                                <div className="conatact-box common-contact-inner position-relative">
                                    <div className="section-title mb-40">
                                        <h5 className="p1-clr wow fadeInLeft text-center" data-wow-delay="0.4s">
                                            Sign Up
                                        </h5>
                                    </div>
                                    {error && (
                                        <div className="alert alert-danger mb-3">
                                            {error}
                                        </div>
                                    )}
                                    <form onSubmit={handleSubmit} className="row g-xl-4 g-3">
                                        <div className="col-lg-12">
                                            <input 
                                                type="text" 
                                                name="name"
                                                placeholder="Name" 
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-12">
                                            <input 
                                                type="email" 
                                                name="email"
                                                placeholder="E-mail" 
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-12">
                                            <input 
                                                type="password" 
                                                name="password"
                                                placeholder="Password" 
                                                value={formData.password}
                                                onChange={handleChange}
                                                required
                                                minLength={6}
                                            />
                                        </div>
                                        <div className="col-lg-12">
                                            <input 
                                                type="tel" 
                                                name="phoneNumber"
                                                placeholder="Phone Number (Optional)" 
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-lg-12 text-center">
                                            <button 
                                                type="submit" 
                                                className="cmn-btn col-lg-12 text-capitalize my-1"
                                                disabled={isLoading}
                                            >
                                                {isLoading ? 'Registering...' : 'Sign Up'}
                                            </button>
                                            <div className="mt-3">
                                                <span className="me-2" style={{color:"black"}}>Already have an account?</span>
                                                <Link 
                                                    href="/login" 
                                                    className="text-primary hover:underline no-wrap"
                                                >
                                                    Sign In 
                                                </Link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className=" w-100 wow fadeInRight" data-wow-delay=".4s">
                                <img src="assets/img/banner/care.jpg" alt="img" className="w-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}