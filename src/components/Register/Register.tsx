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
            <div className="col-md-6 ">
              <div className="talking-contact-box">
                <div className="conatact-box common-contact-inner position-relative">
                  <div className="section-title mb-40">
                    <h5 className="p1-clr wow fadeInLeft text-center" data-wow-delay="0.4s">
                      Sign Up
                    </h5>
                    
                  </div>
                  <form onSubmit={(e) => e.preventDefault()} className="row g-xl-4 g-3">
                    <div className="col-lg-12">
                      <input type="text" placeholder="Name" />
                    </div>
                    <div className="col-lg-12">
                      <input type="email" placeholder="E-mail" />
                    </div>
                    <div className="col-lg-12">
                      <input type="password" placeholder="Password" />
                    </div>
                    {/* <div className="col-lg-12">
                      <textarea name="message" placeholder="Message"></textarea>
                    </div> */}
                    <div className="col-lg-12 text-center">
                      <button type="submit" className="cmn-btn col-lg-12 text-capitalize my-1">
                      Sign Up
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
