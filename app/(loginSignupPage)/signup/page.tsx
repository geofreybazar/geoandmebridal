import { auth } from "@/auth";

import LeftSide from "@/components/Signup/LeftSide";
import RightSide from "@/components/Signup/RightSide/RightSide";

const SignupPage = async () => {
  const session = await auth();

  if (!session) {
    return null;
  }

  const { email, firstName, lastName, provider } = session.user;

  return (
    <main className='min-h-screen grid md:grid-cols-2'>
      {/* Left Side - Editorial Image */}
      <LeftSide />

      {/* Right Side - Form */}
      <RightSide
        email={email}
        firstName={firstName}
        lastName={lastName}
        provider={provider}
      />
    </main>
  );
};

export default SignupPage;
