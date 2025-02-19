"use client";
import { SessionProvider } from "next-auth/react";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

// "use client";
// import { SessionProvider } from "next-auth/react";
// import type { Session } from "next-auth";

// interface AuthProviderProps {
//   children: React.ReactNode;
//   session?: Session | null;
// }

// export const AuthProvider = ({ children, session }: AuthProviderProps) => {
//   return <SessionProvider session={session}>{children}</SessionProvider>;
// };
