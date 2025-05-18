import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";

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
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     email: { label: "Email", type: "email" },
    //     password: { label: "Password", type: "password" }
    //   },
    //   async authorize(credentials) {
    //     // Replace with your actual authentication logic
    //     const mockUser = {
    //       id: "1",
    //       email: "test@example.com",
    //       name: "Test User"
    //     };
        
    //     if (credentials?.email === mockUser.email) {
    //       return mockUser;
    //     }
    //     return null;
    //   }
    // }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
    error: '/login', // Redirect to login on error
  },
  callbacks: {
    // async jwt({ token, user }) {
    //   if (user) {
    //     token.id = user.id;
    //   }
    //   return token;
    // },
    // async session({ session, token }) {
    //   if (token?.id) {
    //     session.user.id = token.id;
    //   }
    //   return session;
    // },
    async redirect({ url, baseUrl }) {
      // Handle relative URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allow same domain redirects
      if (new URL(url).origin === baseUrl) return url;
      // Default to base URL
      return baseUrl;
    }
  },
  cookies: {
    sessionToken: {
      name: "__Secure-next-auth.session-token",
      options: {
        path: "/",
        secure: true,
        domain: process.env.NODE_ENV === "production" ? ".vercel.app" : undefined,
        sameSite: "lax",
      },
    },
  },
  debug: process.env.NODE_ENV !== "production",
});

export { handler as GET, handler as POST };