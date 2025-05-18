"use client";
import { signIn } from "next-auth/react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
        callbackUrl: '/'
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      if (result?.url) {
        router.push(result.url);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider: 'facebook' | 'google') => {
    signIn(provider, { callbackUrl: '/' });
  };

  return (
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

                {error && (
                  <div className="alert alert-danger mb-4" role="alert">
                    {error}
                  </div>
                )}

                <form onSubmit={handleEmailLogin} className="row g-xl-4 g-3">
                  <div className="col-lg-12">
                    <input 
                      type="email" 
                      placeholder="E-mail" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-12">
                    <input 
                      type="password" 
                      placeholder="Password" 
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-12 text-center">
                    <button 
                      type="submit" 
                      className="cmn-btn col-lg-12 text-capitalize my-1"
                      disabled={loading}
                    >
                      {loading ? 'Signing In...' : 'Sign In'}
                    </button>

                    <p className="mx-4 my-3" style={{color: "black"}}>or sign in with</p>
                    
                    <div className="col-lg-12 text-center">
                      <button 
                        type="button"
                        onClick={() => handleSocialLogin('facebook')}
                        className="cmn-btn text-capitalize bg-primary border-radius p-0 mx-2 col-lg-2"
                        
                        disabled={loading}
                      >
                        <i className="fab fa-facebook-f p-3"></i>
                      </button>
                      
                      <button 
                        type="button"
                        onClick={() => handleSocialLogin('google')}
                        className="cmn-btn text-capitalizecmn-btn text-capitalize bg-danger border-radius p-0 my-2 col-lg-2"
                        
                        disabled={loading}
                      >
                        <i className="fab fa-google p-3"></i>
                      </button>
                    </div>
                  </div>

                  <div className="col-lg-12 mt-3 text-center">
                    <span className="me-2" style={{color: "black"}}>Don't have an account?</span>
                    <Link 
                      href="/register" 
                      className="text-success hover:underline"
                    >
                      Sign Up
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="w-100 wow fadeInRight" data-wow-delay=".4s">
              <img src="/assets/img/banner/care.jpg" alt="login" className="w-100 rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}