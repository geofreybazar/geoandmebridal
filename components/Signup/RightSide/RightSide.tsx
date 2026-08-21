import FormFooter from "./FormFooter";
import FormHeader from "./FormHeader";
import SignupForm from "./SignupForm";

interface RightSideProps {
  email: string | undefined | null;
  firstName: string | null | undefined;
  lastName: string | null | undefined;
  provider: string | null | undefined;
}

const RightSide = (props: RightSideProps) => {
  return (
    <div className='flex items-center justify-center bg-linear-to-b from-offwhite to-champagneBeige'>
      <div className='w-full max-w-lg bg-white/80 backdrop-blur rounded-md shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-10 text-center'>
        {/* Logo */}
        <FormHeader />

        {/* Form */}
        <SignupForm {...props} />

        {/* Footer */}
        <FormFooter />
      </div>
    </div>
  );
};

export default RightSide;
