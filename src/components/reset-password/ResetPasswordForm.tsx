// components/ResetPasswordForm.tsx
'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    token: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Extract token from URL if present
  useEffect(() => {
    if (isMounted && searchParams) {
      const token = searchParams.get('token');
      if (token) {
        setFormData(prev => ({ ...prev, token }));
      }
    }
  }, [isMounted, searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Calculate password strength
    if (name === 'newPassword') {
      let strength = 0;
      if (value.length >= 8) strength += 1;
      if (/[A-Z]/.test(value)) strength += 1;
      if (/[0-9]/.test(value)) strength += 1;
      if (/[^A-Za-z0-9]/.test(value)) strength += 1;
      setPasswordStrength(strength);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccessMessage('');

    // Validate form
    if (!formData.token) {
      setError('Invalid or expired reset link');
      setIsLoading(false);
      return;
    }

    if (formData.newPassword.length < 6) {
      setError('Password must be at least 6 characters');
      setIsLoading(false);
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('http://167.86.100.138:3000/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: formData.token,
          newPassword: formData.newPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to reset password');
      }

      if (data.status === 'success') {
        setSuccessMessage('Password reset successfully! Redirecting to login...');
        setTimeout(() => router.push('/login'), 3000);
      } else {
        setError(data.message || 'Failed to reset password');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Reset password error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const getStrengthColor = () => {
    switch (passwordStrength) {
      case 1: return 'bg-red-500';
      case 2: return 'bg-yellow-500';
      case 3: return 'bg-blue-500';
      case 4: return 'bg-green-500';
      default: return 'bg-gray-200';
    }
  };

  if (!isMounted) {
    return (
      <section className="talking-section overflow-hidden space-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="talking-contact-box">
                <div className="conatact-box common-contact-inner position-relative">
                  <div className="section-title mb-40">
                    <h5 className="p1-clr text-center wow fadeInLeft" data-wow-delay="0.4s">
                      Loading...
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="talking-section overflow-hidden space-top">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="talking-contact-box">
              <div className="conatact-box common-contact-inner position-relative">
                <div className="section-title mb-40">
                  <h5 className="p1-clr text-center wow fadeInLeft" data-wow-delay="0.4s">
                    Reset Your Password
                  </h5>
                  <p className="text-center text-muted mt-2">
                    Enter your new password below
                  </p>
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
                
                <form onSubmit={handleSubmit} className="row g-xl-4 g-3">
                  <input
                    type="hidden"
                    name="token"
                    value={formData.token}
                  />
                  
                  <div className="col-12">
                    <input
                      type="password"
                      name="newPassword"
                      placeholder="New Password (min 6 characters)"
                      value={formData.newPassword}
                      onChange={handleChange}
                      required
                      minLength={6}
                      className="form-control"
                    />
                    {formData.newPassword && (
                      <div className="mt-2">
                        <div className="progress" style={{ height: '5px' }}>
                          <div 
                            className={`progress-bar ${getStrengthColor()}`} 
                            role="progressbar" 
                            style={{ width: `${passwordStrength * 25}%` }}
                          ></div>
                        </div>
                        <small className="text-muted">Password strength: {passwordStrength}/4</small>
                      </div>
                    )}
                  </div>
                  
                  <div className="col-12">
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      minLength={6}
                      className="form-control"
                    />
                  </div>
                  
                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="cmn-btn w-100 text-capitalize my-1"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Resetting...
                        </>
                      ) : 'Reset Password'}
                    </button>
                  </div>
                  
                  <div className="col-12 text-center mt-3">
                    <Link href="/login" className="text-primary hover:underline">
                      Back to Login
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}