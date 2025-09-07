import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

// next auth takes auth options as an argument
// and returns a handler function that can be used in API routes
// this handler function will handle the authentication flow
// and return the session object to the client
const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
});

export { handler as GET, handler as POST };
