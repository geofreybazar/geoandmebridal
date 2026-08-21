import Link from "next/link";

const FormFooter = () => {
  return (
    <div className='mt-8 text-xs text-black/50'>
      Already have an account?{" "}
      <Link href='/login' className='underline hover:text-black'>
        Sign in
      </Link>
    </div>
  );
};

export default FormFooter;
