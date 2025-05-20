// app/login/page.tsx
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');

  const handleGoogleSuccess = async (credentialResponse: any) => {
    setIsLoading(true);
    setError('');
    
    try {
      console.log('Google credential response:', credentialResponse);
      
      if (!credentialResponse.credential) {
        throw new Error('No ID token received from Google');
      }

      const response = await fetch('http://167.86.100.138:3000/auth/google/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          idToken: credentialResponse.credential
        })
      });

      const data = await response.json();
      console.log('Backend response:', data);

      if (!response.ok) {
        throw new Error(data.message || 'Authentication failed');
      }

      if (data.access_token) {
        localStorage.setItem('access_token', data.access_token);
        if (data.user) {
          localStorage.setItem('user', JSON.stringify(data.user));
        }
        router.push('/');
      } else {
        throw new Error('No access token received from backend');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Google login failed';
      setError(errorMessage);
      console.error('Google login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleError = () => {
    setError('Failed to connect to Google');
  };


  // Facebook login handler
  const handleFacebookLogin = async (response: any) => {
    setIsLoading(true);
    setError('');
    
    try {
      if (!response.accessToken) {
        throw new Error('No access token received from Facebook');
      }
      console.log("Facebook access token received:", response);
      
      const fbResponse = await fetch('http://167.86.100.138:3000/auth/facebook/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          accessToken: response.accessToken
        })
      
        
      });

      const data = await fbResponse.json();
      console.log("date",data);
      
      if (!fbResponse.ok) {
        throw new Error(data.message || 'Facebook authentication failed');
      }
      console.log(data.access_token);
      
      if (data.access_token) {
        localStorage.setItem('access_token', data.access_token);
        if (data.user) {
          localStorage.setItem('user', JSON.stringify(data.user));
        }
        router.push('/');
      } else {
        throw new Error('No access token received from backend');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Facebook login failed';
      setError(errorMessage);
      console.error('Facebook login error:', err);
    } finally {
      setIsLoading(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (!formData.email && !formData.phoneNumber) {
      setError('Please provide either email or phone number');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('http://167.86.100.138:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email || undefined,
          phoneNumber: formData.phoneNumber || undefined,
          password: formData.password
        })
      });

      const data = await response.json();

      if (data.status === 'success') {
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('user', JSON.stringify(data.user));
        router.push('/');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred during login');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    if (!forgotPasswordEmail) {
      setError('Please provide your email address');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('http://167.86.100.138:3000/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: forgotPasswordEmail
        })
      });

      const data = await response.json();

      if (data.status === 'success') {
        setSuccessMessage('Password reset link sent to your email');
        setShowForgotPassword(false);
      } else {
        setError(data.message || 'Failed to send reset email');
      }
    } catch (err) {
      setError('An error occurred while processing your request');
      console.error('Forgot password error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleLoginMethod = () => {
    setLoginMethod(prev => prev === 'email' ? 'phone' : 'email');
    setFormData(prev => ({
      ...prev,
      email: loginMethod === 'email' ? '' : prev.email,
      phoneNumber: loginMethod === 'phone' ? '' : prev.phoneNumber
    }));
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
                    {showForgotPassword ? 'Forgot Password' : 'Sign In'}
                  </h5>
                </div>
                {error && (
                  <div className="alert alert-danger mb-3">
                    {error}
                  </div>
                )}
                {successMessage && (
                  <div className="alert alert-success mb-3">
                    {successMessage}
                  </div>
                )}

                {showForgotPassword ? (
                  <form onSubmit={handleForgotPassword} className="row g-xl-4 g-3">
                    <div className="col-lg-12">
                      <input 
                        type="email" 
                        name="email"
                        placeholder="Enter your email" 
                        value={forgotPasswordEmail}
                        onChange={(e) => setForgotPasswordEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-lg-12 text-center">
                      <button 
                        type="submit" 
                        className="cmn-btn col-lg-12 text-capitalize my-1"
                        disabled={isLoading}
                      >
                        {isLoading ? 'Sending...' : 'Send Reset Link'}
                      </button>
                    </div>
                    <div className="col-lg-12 text-center">
                      <button 
                        type="button" 
                        className="text-primary hover:underline"
                        onClick={() => {
                          setShowForgotPassword(false);
                          setError('');
                          setSuccessMessage('');
                        }}
                      >
                        Back to Login
                      </button>
                    </div>
                  </form>
                ) : (
                  <form onSubmit={handleSubmit} className="row g-xl-4 g-3">
                    {loginMethod === 'email' ? (
                      <div className="col-lg-12">
                        <input 
                          type="email" 
                          name="email"
                          placeholder="E-mail" 
                          value={formData.email}
                          onChange={handleChange}
                          required={loginMethod === 'email'}
                        />
                      </div>
                    ) : (
                      <div className="col-lg-12">
                        <input 
                          type="tel" 
                          name="phoneNumber"
                          placeholder="Phone Number" 
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          required={loginMethod === 'phone'}
                        />
                      </div>
                    )}
                    <div className="col-lg-12">
                      <input 
                        type="password" 
                        name="password"
                        placeholder="Password" 
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-lg-12 text-center">
                      <button 
                        type="button" 
                        className="text-primary mb-2 hover:underline"
                        onClick={() => setShowForgotPassword(true)}
                      >
                        Forgot Password?
                      </button>
                    </div>
                    <div className="col-lg-12 text-center">
                      <button 
                        type="button" 
                        className="text-primary mb-2 hover:underline"
                        onClick={toggleLoginMethod}
                      >
                        {loginMethod === 'email' 
                          ? 'Use phone number instead' 
                          : 'Use email instead'}
                      </button>
                    </div>
                    <div className="col-lg-12 text-center">
                      <button 
                        type="submit" 
                        className="cmn-btn col-lg-12 text-capitalize my-1"
                        disabled={isLoading}
                      >
                        {isLoading ? 'Signing In...' : 'Sign In'}
                      </button>
                    </div>
                    <div className="col-lg-12 text-center">
                      <p className="mx-4" style={{color: "black"}}>or sign in with</p>
                      
<div className="d-flex justify-content-center gap-2">
  <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
    <GoogleLogin
      onSuccess={handleGoogleSuccess}
      onError={handleGoogleError}
      useOneTap
      shape="circle"
      size="large"
      text="signin_with"
      theme="filled_blue"
    />
  </GoogleOAuthProvider>
  <FacebookLogin
    appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID!}
    autoLoad={false}
    fields="name,email,picture"
    callback={handleFacebookLogin}
    cssClass={`cmn-btn text-capitalize bg-primary border-radius p-0 ${isLoading ? 'disabled' : ''}`}
    icon="fa-facebook"
    textButton=""
    size="small"
  />
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
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="w-100 wow fadeInRight" data-wow-delay=".4s">
              <img src="assets/img/banner/care.jpg" alt="img" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}