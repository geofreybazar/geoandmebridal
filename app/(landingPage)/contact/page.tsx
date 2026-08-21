import PageHeader from "@/components/SharedComponents/PageHeader/PageHeader";
import { paragraph, title } from "@/utils/fonts/fonts";

const ContactPage = () => {
  return (
    <main>
      {/* Header */}
      <PageHeader
        miniTitle={"Contact"}
        mainTitle={"Get in Touch"}
        description={
          "We would love to hear from you. Whether you are beginning your bridal journey or have a specific inquiry, our team is here to assist you."
        }
      />

      {/* Content */}
      <section>
        {/* Contact Info */}
        <div className='flex flex-col gap-8'>
          <div>
            <h3 className={`${title.className} text-2xl mb-3`}>
              Atelier Information
            </h3>
            <p className={`${paragraph.className} text-black/70`}>
              GEO + Me Bridal Atelier
            </p>
            <p className={`${paragraph.className} text-black/70`}>
              Tower 2, Unit 7G, Suntrust Solana Condominium
            </p>
            <p className={`${paragraph.className} text-black/70`}>
              Natividad Lopez St. corner Ayala Blvd.
            </p>
            <p className={`${paragraph.className} text-black/70`}>
              Ermita, Manila
            </p>
          </div>

          <div>
            <h4 className='text-sm tracking-[0.35em] uppercase text-black/60 mb-2'>
              Contact
            </h4>
            <p className={`${paragraph.className} text-black/70`}>
              (+63) 920 581 7115
            </p>
            <p className={`${paragraph.className} text-black/70`}>
              geoandmebridal.com
            </p>
          </div>

          <div>
            <h4 className='text-sm tracking-[0.35em] uppercase text-black/60 mb-2'>
              Studio Hours
            </h4>
            <p className={`${paragraph.className} text-black/70`}>
              Monday – Saturday
            </p>
            <p className={`${paragraph.className} text-black/70`}>
              10:00 AM – 6:00 PM
            </p>
            <p className='text-xs text-black/50 mt-2'>
              Visits are by appointment only.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
