import { paragraph, title } from "@/utils/fonts/fonts";

interface PageHeaderProps {
  miniTitle: string;
  mainTitle: string;
  description: string;
}

const PageHeader = ({ miniTitle, mainTitle, description }: PageHeaderProps) => {
  return (
    <div className='max-w-3xl mx-auto text-center mb-16'>
      <p className='text-xs tracking-[0.35em] uppercase text-black/60 mb-4'>
        {miniTitle}
      </p>

      <h1
        className={`${title.className} text-4xl md:text-5xl lg:text-6xl text-black`}
      >
        {mainTitle}
      </h1>

      <div className='w-24 h-px mx-auto my-8 bg-gradient-to-r from-transparent via-champagneGold to-transparent' />

      <p className={`${paragraph.className} text-sm md:text-lg text-black/70`}>
        {description}
      </p>
    </div>
  );
};

export default PageHeader;
