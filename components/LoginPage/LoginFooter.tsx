import Link from "next/link";

const LoginFooter = () => {
  return (
    <div className='mt-8'>
      <p className='text-xs text-black/50 leading-relaxed'>
        By continuing, you agree to our{" "}
        <Link href='/terms-of-service' className='underline hover:text-black'>
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href='/privacy-policy' className='underline hover:text-black'>
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
};

export default LoginFooter;
