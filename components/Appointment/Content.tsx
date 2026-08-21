import Right from "./Right/Right";
import Left from "./Left";

const Content = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
        {/* Left: Information */}
        <Left />
        {/* Right: Form */}
        <Right />
      </div>
    </section>
  );
};

export default Content;
