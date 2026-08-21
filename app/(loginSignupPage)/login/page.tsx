import LoginHeader from "@/components/LoginPage/LoginHeader";
import LoginButtons from "@/components/LoginPage/LoginButtons";
import LoginFooter from "@/components/LoginPage/LoginFooter";

const LoginPage = () => {
  return (
    <main className='min-h-screen bg-linear-to-b from-offwhite to-champagneBeige flex items-center justify-center px-6'>
      <div className='w-full max-w-md bg-white/80 backdrop-blur rounded-md shadow-sm p-5 md:p-10 text-center'>
        {/* Header */}
        <LoginHeader />

        {/* Login Buttons */}
        <LoginButtons />

        {/* Footer */}
        <LoginFooter />
      </div>
    </main>
  );
};

export default LoginPage;
