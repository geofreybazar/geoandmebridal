import { auth } from "@/auth";

const Hero = async () => {
  const session = await auth();
  const userName = session?.user.name || "User";

  return (
    <section>
      <h1 className='font-serif text-4xl xl:text-5xl font-light tracking-tight mb-6'>
        Welcome back, {userName}
      </h1>
    </section>
  );
};

export default Hero;
