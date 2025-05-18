import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  // Optional: Customize pages if needed
  pages: {
    signIn: '/login',
  },
//   session: {
//     strategy: "jwt",
//     // maxAge: 30 * 24 * 60 * 60, // 30 days
//     maxAge:.5 * 24 * 60 * 60, // 12 hours
//   },
});

export { handler as GET, handler as POST };