import Left from "./Left";
import Legal from "./Legal";
import Right from "./Right";

const Footer = () => {
  return (
    <footer className='bg-black text-offwhite'>
      <div className='px-6 xl:px-36 2xl:px-52 py-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          {/* Left – Brand */}
          <Left />

          {/* Right – Navigation & Contact */}
          <Right />
        </div>
      </div>

      {/* Legal */}
      <Legal />
    </footer>
  );
};

export default Footer;
