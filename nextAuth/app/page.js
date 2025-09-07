"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-sm text-center border border-gray-700">
        {session ? (
          <>
            <h2 className="mb-4 text-2xl font-semibold text-gray-100">
              Welcome!
            </h2>
            <p className="mb-6 text-gray-300">
              Signed in as{" "}
              <span className="font-bold text-white">{session.user.email}</span>
            </p>
            <button
              onClick={() => signOut()}
              className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold shadow transition duration-150 cursor-pointer"
            >
              Sign out
            </button>
          </>
        ) : (
          <>
            <h2 className="mb-4 text-2xl font-semibold text-gray-100">
              Hello!
            </h2>
            <p className="mb-6 text-gray-300">You are not signed in.</p>
            <button
              onClick={() => signIn("github")} //the github shows which provider to use for signing in no need to give this if only provider is being used in your app
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold shadow transition duration-150 cursor-pointer"
            >
              Sign in
            </button>
          </>
        )}
      </div>
    </div>
  );
}
