import Link from "next/link";
import { title, paragraph } from "@/utils/fonts/fonts";

import MochaContainedButton from "@/components/SharedComponents/ButtonComponents/MochaContainedButton";
import OutlinedMochaButton from "@/components/SharedComponents/ButtonComponents/OutlinedMochaButton";

export default function AppointmentSuccessPage() {
  return (
    <main className='flex items-center justify-center text-center'>
      <section className='max-w-2xl'>
        {/* Header */}
        <p className='text-xs tracking-[0.35em] uppercase text-black/60 mb-4'>
          Appointment Request Sent
        </p>

        <h1
          className={`${title.className} text-3xl md:text-5xl lg:text-6xl text-black mb-6`}
        >
          Thank You
        </h1>

        {/* Divider */}
        <div className='w-24 h-px mx-auto mb-8 bg-gradient-to-r from-transparent via-champagneGold to-transparent' />

        {/* Message */}
        <p
          className={`${paragraph.className} text-sm md:text-lg text-black/70 mb-8 leading-relaxed`}
        >
          We’ve received your appointment request. Our bridal consultant will
          contact you within the next 24–48 hours to confirm your schedule and
          discuss the details of your consultation.
        </p>

        <p className={`${paragraph.className} text-xs text-black/50 mb-12`}>
          For urgent inquiries, you may reach us directly at (+63) 920-581-7115.
        </p>

        {/* Actions */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Link href='/collection'>
            <MochaContainedButton>View Collections</MochaContainedButton>
          </Link>

          <Link href='/brides'>
            <OutlinedMochaButton>See Real Brides</OutlinedMochaButton>
          </Link>
        </div>
      </section>
    </main>
  );
}
