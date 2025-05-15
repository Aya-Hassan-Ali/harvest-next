"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your login logic here
  }

  const handleSocialLogin = (provider: 'facebook' | 'google') => {
    // Handle social login redirection
    if (provider === 'facebook') {
      window.location.href = '/api/auth/facebook'
    } else {
      window.location.href = '/api/auth/google'
    }
  }

  return (
    <>
      <section className="talking-section overflow-hidden space-top">
        <div className="container">
          <div className="row g-4 align-items-xl-center flex-row-reverse justify-content-between">
            <div className="col-md-6">
              <div className="talking-contact-box">
                <div className="conatact-box common-contact-inner position-relative">
                  <div className="section-title mb-40">
                    <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                      Login
                    </h5>
                  </div>
                  <form onSubmit={handleSubmit} className="row g-xl-4 g-3">
                    <div className="col-lg-12">
                      <input type="email" placeholder="E-mail" required />
                    </div>
                    <div className="col-lg-12">
                      <input type="password" placeholder="Password" required />
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="cmn-btn text-capitalize w-full">
                        Login
                      </button>
                    </div>

                    {/* Social Login Section */}
                    <div className="col-lg-12">
                      
                        <span className="mx-4" style={{color: "black"}}>or</span>
                       
                      
                      <div className="social-wrapper social-empact d-flex align-items-center justify-content-center gap-4 mb-4">
                        {/* Facebook Login */}
                        <button 
                          onClick={() => handleSocialLogin('facebook')}
                          className=" bg-transparent border-0 p-0"
                        >
                          <i className="fab fa-facebook-f  bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition"></i>
                        </button>
                        
                        {/* Google Login */}
                        <button 
                          onClick={() => handleSocialLogin('google')}
                          className=" bg-transparent border-0 p-0"
                        >
                          <i className="fab fa-google  bg-red-600 p-3 rounded-full hover:bg-red-700 transition"></i>
                        </button>
                      </div>
                    </div>

                    <div className="col-lg-12 mt-3 text-center">
                      <span className="me-2" style={{color: "black"}}>Don't have an account?</span>
                      <Link 
                        href="/register" 
                        className="text-primary hover:underline"
                      >
                        Register
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="taklking-cotnact-thumb w-100 wow fadeInRight" data-wow-delay=".4s">
                <img src="assets/img/contact/talking-contact.png" alt="img" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}