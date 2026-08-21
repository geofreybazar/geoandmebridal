import MochaContainedButton from "../SharedComponents/ButtonComponents/MochaContainedButton";
import Link from "next/link";

const EmptyCart = () => {
  return (
    <div className='mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center gap-5'>
      {/* Heading */}
      <h1 className='font-serif text-4xl font-light text-[#3E312C]'>
        Your Cart is Empty
      </h1>

      {/* Description */}
      <p className='max-w-md text-sm leading-relaxed text-muted-foreground'>
        You haven't added any bridal pieces yet. Explore our curated collection
        of gowns, entourage dresses, formalwear, and accessories crafted for
        life's most memorable moments.
      </p>

      {/* CTA */}
      <Link href='/shop'>
        <MochaContainedButton>Explore Collection</MochaContainedButton>
      </Link>
    </div>
  );
};

export default EmptyCart;
