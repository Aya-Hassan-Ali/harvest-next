// app/reset-password/page.tsx
import ResetPasswordForm from '@/components/ResetPasswordForm';
import { Suspense } from 'react';

export default function ResetPasswordPage({
  searchParams,
}: {
  searchParams: { token?: string };
}) {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <ResetPasswordForm tokenFromServer={searchParams.token} />
    </Suspense>
  );
}

function LoadingSkeleton() {
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