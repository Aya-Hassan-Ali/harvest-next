

import "../styles/index.scss";
import { GoogleOAuthProvider } from '@react-oauth/google'
export const metadata = {
  title: 'HarvestGuard: Smart Farm Monitoring & Management Made Easy',
  description: 'HarvestGuard empowers you to efficiently track and manage your farm, acting as your vigilant eyes on the ground, ensuring everything runs smoothly.',
  
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <GoogleOAuthProvider clientId="81889054187-6god7vbdlc9c5rmmpf7vljdnob456ob0.apps.googleusercontent.com">
    <html lang="en"> 
    <head>
      <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Mali:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap" />

    </head>
      <body>
        {children}
      </body>
    </html>
    </GoogleOAuthProvider>
  );
}
