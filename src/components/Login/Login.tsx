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
                    <h5 className="p1-clr text-center wow fadeInLeft" data-wow-delay="0.4s">
                      Sign In
                    </h5>
                  </div>
                  <form onSubmit={handleSubmit} className="row g-xl-4 g-3">
                    <div className="col-lg-12">
                      <input type="email" placeholder="E-mail" required />
                    </div>
                    <div className="col-lg-12">
                      <input type="password" placeholder="Password" required />
                    </div>
                    <div className="col-lg-12 text-center">
                      <button type="submit" className="cmn-btn col-lg-12 text-capitalize my-1 ">
                        Sign In
                      </button>
         
                        {/* Facebook Login */}
                        <p className="mx-4" style={{color: "black"}}>or sign in with</p>
                        <button 
                          onClick={() => handleSocialLogin('facebook')}
                          className=" cmn-btn text-capitalize bg-primary border-radius p-0 mx-2 col-lg-2"
                        >
                          <i className="fab fa-facebook-f  bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition"></i>
                        </button>
                        
                        {/* Google Login */}
                        <button 
                          onClick={() => handleSocialLogin('google')}
                          className=" cmn-btn text-capitalizecmn-btn text-capitalize bg-danger border-radius p-0 my-2 col-lg-2"
                        >
                          <i className="fab fa-google  bg-red-600 p-3 rounded-full hover:bg-red-700 transition"></i>
                        </button>
                      
                    </div>

                    {/* Social Login Section */}
                    
                      
                      
                    

                    <div className="col-lg-12 mt-3 text-center">
                      <span className="me-2" style={{color: "black"}}>Don't have an account?</span>
                      <Link 
                        href="/register" 
                        className="text-success  hover:underline"
                      >
                        Sign Up
                      </Link>
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