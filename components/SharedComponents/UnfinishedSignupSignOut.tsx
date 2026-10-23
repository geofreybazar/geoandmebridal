"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

// Signed in with Google/Facebook but signup not finished: leaving the signup
// page signs the visitor out (owner decision)
const UnfinishedSignupSignOut = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const leftSignup = session?.isNewUser === true && pathname !== "/signup";

  useEffect(() => {
    if (!leftSignup) return;
    signOut({ redirect: false }).then(() => router.refresh());
  }, [leftSignup, router]);

  return null;
};

export default UnfinishedSignupSignOut;
