"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your login logic here
    // After successful login, you might want to redirect to another page
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
                      <button type="submit" className="cmn-btn text-capitalize">
                        Login
                      </button>
                      <div className="mt-3">
                        <span className="me-2" style={{color:"black"}}>Don't have an account?</span>
                        <Link 
                          href="/register" 
                          className="text-primary hover:underline"
                        >
                          Register 
                        </Link>
                      </div>
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