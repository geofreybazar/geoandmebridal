import MochaContainedButton from "../SharedComponents/ButtonComponents/MochaContainedButton";

const CartLoadError = ({ onRetry }: { onRetry: () => void }) => {
  return (
    <div className='mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center gap-5'>
      <h1 className='font-serif text-4xl font-light text-[#3E312C]'>
        We Couldn&apos;t Load Your Cart
      </h1>

      <p className='max-w-md text-sm leading-relaxed text-muted-foreground'>
        Your items are still saved. Please try again in a moment.
      </p>

      <div>
        <MochaContainedButton onClick={onRetry}>Try Again</MochaContainedButton>
      </div>
    </div>
  );
};

export default CartLoadError;
