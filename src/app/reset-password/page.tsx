'use client';

import dynamic from 'next/dynamic';

// Dynamically import the form with SSR disabled
const ResetPasswordForm = dynamic(
  () => import('@/components/reset-password/ResetPasswordForm'),
  { ssr: false }
);

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <ResetPasswordForm />
    </div>
  );
}