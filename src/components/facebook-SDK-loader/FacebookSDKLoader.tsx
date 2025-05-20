'use client';

import { useEffect } from 'react';

export default function FacebookSDKLoader() {
  useEffect(() => {
    // Load Facebook SDK
    const loadFacebookSDK = () => {
      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_US/sdk.js';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      document.body.appendChild(script);
    };

    loadFacebookSDK();

    return () => {
      const script = document.querySelector('script[src*="facebook.net"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // This component doesn't render anything visible
  return null;
}