import { paragraph } from "@/utils/fonts/fonts";

interface CartMessageProps {
  message: string;
  action: string;
  onAction: () => void;
}

// Same look as EmptyCart, for the signed-out and failed-to-load states
const CartMessage = ({ message, action, onAction }: CartMessageProps) => {
  return (
    <div className='flex flex-col items-center justify-center flex-1 px-6 text-center'>
      <div className='w-20 h-px mb-6 bg-gradient-to-r from-transparent via-champagneGold to-transparent' />

      <p
        className={`${paragraph.className} text-sm text-black/60 leading-relaxed`}
      >
        {message}
      </p>

      <button
        type='button'
        onClick={onAction}
        className='mt-6 text-xs uppercase tracking-[0.2em] text-black/70 hover:text-black transition'
      >
        {action}
      </button>
    </div>
  );
};

export default CartMessage;
