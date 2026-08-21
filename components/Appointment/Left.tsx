import { title, paragraph } from "@/utils/fonts/fonts";

const Left = () => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='text-center md:text-left'>
        <h3 className={`${title.className} text-2xl mb-4 `}>What to Expect</h3>
        <p className={`${paragraph.className} text-black/70 leading-relaxed `}>
          During your consultation, we will discuss your wedding details,
          preferred silhouettes, fabrics, and inspirations. This session allows
          us to understand your vision and guide you through the bespoke
          process.
        </p>
      </div>

      <div>
        <h4 className='text-sm tracking-[0.35em] uppercase text-black/60 mb-2'>
          Consultation Details
        </h4>
        <ul className='list-disc pl-5 text-black/70 text-sm space-y-2'>
          <li>By appointment only</li>
          <li>One-on-one with the designer</li>
          <li>Approximately 60–90 minutes</li>
          <li>Studio visit at our Manila atelier</li>
        </ul>
      </div>

      <div className='text-center md:text-left'>
        <h4 className='text-sm tracking-[0.35em] uppercase text-black/60 mb-2'>
          Important Note
        </h4>
        <p className='text-sm text-black/60 text-center md:text-left'>
          Appointment requests are subject to confirmation. Our team will reach
          out to finalize your schedule.
        </p>
      </div>
    </div>
  );
};

export default Left;
